$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['', ' '],
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            1100: {
                items: 5
            }
        }
    });
    $(function () {
        $("#dialog").dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $("#opener").on("click", function () {
            $("#dialog").dialog("open");
        });
    });


    HTML
    CSS
    JS

    Result
    Skip
    Results
    Iframe

    EDIT
    ON
    Live

    1

​

2

​

3

    /* Please ❤ this if you like it! */

    4

​

5

​

6

(function ($) {
    "use strict";

    7


    8

    //Page cursors

    9

​

10

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {

        11

        t.style.left = n.clientX + "px",

            12

        t.style.top = n.clientY + "px",

            13

        e.style.left = n.clientX + "px",

            14

        e.style.top = n.clientY + "px",

            15

        i.style.left = n.clientX + "px",

            16

        i.style.top = n.clientY + "px"

        17

    });

    18

    var t = document.getElementById("cursor"),

        19

    e = document.getElementById("cursor2"),

        20

    i = document.getElementById("cursor3");

    21

    function n(t) {

        22

        e.classList.add("hover"), i.classList.add("hover")

        23

    }

    24

    function s(t) {

        25

        e.classList.remove("hover"), i.classList.remove("hover")

        26

    }

    27

    s();

    28

    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {

        29

        o(r[a])

        30

    }

    31

    function o(t) {

        32

        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)

        33

    }

    34


    35

    //Navigation

    36

​


});
