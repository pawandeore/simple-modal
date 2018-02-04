'use strict';



(function(){

    var delay = 250;

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
            _hideModal(el);
        }
        else{
            _showModal(el);
        }
    }

    function _showModal(el){
        el.style.display = 'block';

        setTimeout(function(){
            el.classList.add('active');
            document.body.classList.add('modal-active');
        }, delay);

    }

    function _hideModal(el){
        el.classList.remove('active');

        setTimeout(function(){
            el.style.display = 'none';
            document.body.classList.remove('modal-active');
        }, delay);
    }

    function _hideAll(){
        Array.prototype.slice.call(document.querySelectorAll('.modal.active'))
            .forEach(function(el){
                _hideModal(el);
            });
    }

    // Exit key should close any open modals
    document.addEventListener('keyup', function(event){
        if(event.keyCode === 27){
            _hideAll();
        }
    });

    document.addEventListener('click', function(e){
        var el = e.target;

        if(el.getAttribute('data-toggle') == 'modal'){
            var modal = document.querySelector(el.getAttribute('data-target'));
            _showModal(modal);
        }
        else if(el.classList.contains('modal')){
            _hideModal(el);
        }
        else if(el.classList.contains('modal-close')){
            _hideAll();
        }
    });


    // Expose modal functionality
    // Named elements ([id], [name]) appear as properties on window object
    // This ensures that we are only overriding window.modal if window.modal is a DOM elem
    //https://stackoverflow.com/a/3434388
    if(typeof window.modal !== 'function') window.modal = modal;

})();
