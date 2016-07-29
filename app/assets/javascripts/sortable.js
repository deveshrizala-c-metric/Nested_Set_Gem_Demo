var ready;
ready = function() {

// $(function() {
      $("#sortable").nestedSortable({
        listType: 'ol',
        items: 'li',
        placeholder: 'placeholder',
        forcePlaceholderSize: true,
        handle: 'div',
        helper: 'clone',
        opacity: .6,
        revert: 250,
        tabSize: 25,
        tolerance: 'pointer',
        toleranceElement: '> div',
        isTree: true,
        expandOnHover: 700,
        startCollapsed: true,
        selector: '[rel=sortable]',
        update: function( event, ui )
       {
          var c = {set : JSON.stringify($('#sortable').nestedSortable('toHierarchy', {startDepthCount: 0}))};
          $.post("/savesort", c, $('#output').html('<p id="flash_notice">Saved Successfully</p>'))
       }
      });
      $("#sortable").disableSelection(); // make links not clickable
      $('.disclose').on('click', function() {
      $(this).closest('li').toggleClass('mjs-nestedSortable-collapsed').toggleClass('mjs-nestedSortable-expanded');
    });
    }
    $(document).ready(ready);
$(document).on('page:load', ready);
    // });