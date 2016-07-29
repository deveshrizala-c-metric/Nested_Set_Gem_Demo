class User < ActiveRecord::Base
  rolify

  has_many :categories
  has_many :albums, :dependent => :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable



  def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.oauth_token = auth.credentials.token
        user.oauth_secret = auth.credentials.secret
        user.save!
      end
  end
end
