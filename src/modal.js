'use strict';

(function(){

    // Modal toggler
    function modal(el){
        if(typeof el === 'string'){
            el = document.querySelector(el);
        }
        if(!el){
            console.error('Modal target not found!');
            return;
        }
        if(el.classList.contains('active')){
            // Hide
            el.classList.remove('active');
            setTimeout(function(){
                el.style.display = 'none';
                document.body.classList.remove('modal-active');
            }, 250);
        }
        else{
            // Show
            el.style.display = 'block';
            setTimeout(function(){
                el.classList.add('active');
                document.body.classList.add('modal-active');
            }, 25);
        }
    }

    // Add event listeners to modal launching elems
    Array.prototype.slice.call(document.querySelectorAll('[data-toggle="modal"][data-target]'))
        .forEach(function(elem){
            var target = document.querySelector(elem.getAttribute('data-target'));

            elem.addEventListener('click', function(event){
                modal(target);
            });
        });

    // Clicking on modal background should close modal
    Array.prototype.slice.call(document.querySelectorAll('.modal'))
        .forEach(function(elem){
            elem.addEventListener('click', function(event){
                if(event.target == elem){
                    elem.classList.remove('active');
                    setTimeout(function(){
                        elem.style.display = 'none';
                        document.body.classList.remove('modal-active');
                    }, 250);
                }
            })
        });

    // Exit key should close any open modals
    document.addEventListener('keyup', function(event){
        if(event.keyCode === 27){
            Array.prototype.slice.call(document.querySelectorAll('.modal.active'))
                .forEach(function(elem){
                    elem.classList.remove('active');
                    setTimeout(function(){
                        elem.style.display = 'none';
                        document.body.classList.remove('modal-active');
                    }, 250);
                });
        }
    });

    // Expose modal functionality
    // Named elements ([id], [name]) appear as properties on window object
    // This ensures that we are only overriding window.modal if window.modal is a DOM elem
    //https://stackoverflow.com/a/3434388
    // if(typeof window.modal !== 'function') window.modal = modal;
    // if(window.modal instanceof Element) window.modal = modal;
    window.modal = (window.modal === document.getElementById('modal')) ? modal : window.modal
})();
