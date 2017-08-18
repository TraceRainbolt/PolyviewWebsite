$(document***REMOVED***.ready(function(***REMOVED*** {
    $('.course-title'***REMOVED***.click(function(***REMOVED*** {
    	$(this***REMOVED***.parent(***REMOVED***.closest('div'***REMOVED***.find('thead'***REMOVED***.toggle(***REMOVED***;
    	$(this***REMOVED***.parent(***REMOVED***.closest('div'***REMOVED***.find('tbody'***REMOVED***.toggle(***REMOVED***;
***REMOVED******REMOVED***;

    $('.remove-container'***REMOVED***.click(function(***REMOVED*** {
        $(this***REMOVED***.parents('tbody'***REMOVED***.find('.row-toggleable'***REMOVED***.toggle(***REMOVED***;
        if($(this***REMOVED***.children(***REMOVED***.eq(0***REMOVED***.text(***REMOVED*** === "−"***REMOVED***
            $(this***REMOVED***.children(***REMOVED***.eq(0***REMOVED***.text("+"***REMOVED***;
        else
            $(this***REMOVED***.children(***REMOVED***.eq(0***REMOVED***.text("−"***REMOVED***;
***REMOVED******REMOVED***;
***REMOVED******REMOVED***

$(".select-btn"***REMOVED***.click(function(e***REMOVED*** {
    var btn = $(this***REMOVED***;
    var course_id = $(this***REMOVED***.val(***REMOVED***;
    var course_name = $(this***REMOVED***.data("name"***REMOVED***;
    var followed_list = $(".followed-list"***REMOVED***;
    btn.prop('disabled', true***REMOVED***;
    addSectionToList(course_name, course_id***REMOVED***;

    e.preventDefault(***REMOVED***;
    $.ajax({
        type: "POST",
        url: "/search/ajax/add_course/",
        data: { 
            'course_id' : course_id
    ***REMOVED***,
        dataType: 'json',
        success: function(data***REMOVED*** {
    ***REMOVED***,
        error: function(result***REMOVED*** {
            btn.prop('disabled', false***REMOVED***;
            console.log("There was an error adding the selected course."***REMOVED***
    ***REMOVED***
***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

$(".followed-list"***REMOVED***.on('click', '.remove-class', function(e***REMOVED*** {
    var rm_class = $(this***REMOVED***.closest('li'***REMOVED***;
    var course_name = rm_class.text(***REMOVED***.replace("Remove", ""***REMOVED***;
    console.log(course_name***REMOVED***;
    var course_id = $(this***REMOVED***.data("id"***REMOVED***;
    var select_btn = $('button[value="'+ course_id + '"***REMOVED***'***REMOVED***;
    select_btn.prop('disabled', false***REMOVED***;
    rm_class.remove(***REMOVED***;

    e.preventDefault(***REMOVED***;
    $.ajax({
        type: "POST",
        url: "/search/ajax/remove_course/",
        data: { 
            'course_id' : course_id
    ***REMOVED***,
        dataType: 'json',
        success: function(data***REMOVED*** {
    ***REMOVED***,
        error: function(result***REMOVED*** {
            addSectionToList(course_name, course_id***REMOVED***;
            select_btn.prop('disabled', true***REMOVED***;
            console.log("There was an error removing the selected course."***REMOVED***
    ***REMOVED***
***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

function addSectionToList(course_name, course_id***REMOVED*** {
    var followed_list = $(".followed-list"***REMOVED***;
    var li_html = '<li><h6>' + course_name + ' <a class = "remove-class" data-id=' + course_id + '>Remove</a>';
    followed_list.append(li_html***REMOVED***;
***REMOVED***