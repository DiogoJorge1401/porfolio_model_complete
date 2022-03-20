(($) => {
    'use strict'
    jQuery(document).ready(() => {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        })

        const mixer = mixitup('.items-wrapper')
        const filterBtn = document.querySelectorAll('.filter-btn')

        filterBtn.forEach(singleItem => {
            singleItem.addEventListener('click', (ev) => {
                filterBtn.forEach(el => {
                    el.classList.remove('active')
                })
                singleItem.classList.add('active')
            })
        })

        $('#select').niceSelect()

        $(".testimonial-wrapper").slick({
            infinite: false,
            arrows: false,
            dots: true,
            slidesToShow: 2,
            autoplay: true,

            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                },

            }, {
                breakpoint: 300,
                settings: "unslick"

            }]
        });

        $('.faq-content').css('display', 'none')
        $('.faq-title').click(function() {
            $('.faq-title').not(this).removeClass("open")
            $('.faq-title').not(this).next().slideUp(300)
            $(this).toggleClass('open')
            $(this).next().slideToggle(300)
        })

        const faqTitle = document.querySelectorAll('.faq-title')
        faqTitle.forEach(el => {
            if (el.classList.contains('open')) {
                el.nextElementSibling.style.display = 'block'
                el.parentElement.style.boxShadow = '0px 10px 60px 0px rgba(38,103,255,.1)'
            }

            el.addEventListener('click', (e) => {
                if (el.classList.contains('open')) {
                    el.parentElement.style.boxShadow = '0px 10px 60px 0px rgba(38,103,255,.1)'

                }
            })

        })

        $(window).on('scroll', () => {
            const scrollTop = $(window).scrollTop(),
                siteHeader = $('#sticky-header')

            if (scrollTop < 90) {
                siteHeader.removeClass('sticky')
            } else {
                siteHeader.addClass('sticky')
            }
        })

        const toggleBtn = $('#menu-toggle'),
            menuPanel = $('.mobile-menu-panel'),
            closeBtn = $('#hide-panel')

        toggleBtn.on('click', () => {
            menuPanel.toggleClass('show-panel')
        })
        closeBtn.on('click', () => {
            menuPanel.toggleClass('show-panel')
        })
    })
})(jQuery)