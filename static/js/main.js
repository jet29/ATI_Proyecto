$(document).ready(function () {
    $('.sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if($('#sidebar-icon').hasClass('fa-angle-double-right'))
        {
           $('#sidebar-icon').removeClass('fa-angle-double-right');
           $('#sidebar-icon').addClass('fa-angle-double-left');
        }else{
         
           $('#sidebar-icon').addClass('fa-angle-double-right');
           $('#sidebar-icon').removeClass('fa-angle-double-left');
        }
    });
});