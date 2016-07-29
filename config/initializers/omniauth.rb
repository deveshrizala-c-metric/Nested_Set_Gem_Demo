Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '916253491814019', 'd54d5e3a782ae0b10a07c377c343cde0'
  provider :twitter, 'Xd6w8Mj3mKgdC4P7wylIghWA0', '8RP68MVM5wNyY3mOe7EK8s3XobGYgRnFIb61JUkfrsOkbVhYah'
end