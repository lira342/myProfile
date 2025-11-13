 function toggleMobileMenu() {
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.classList.toggle('active');
        }
        
        function handleSubmit() {
            const email = document.getElementById('email').value;
            const terms = document.getElementById('terms').checked;
            const messageEl = document.getElementById('form-message');
            const button = document.querySelector('.btn-primary');
            const buttonText = document.getElementById('button-text');
            
            messageEl.className = 'text-sm mt-4';
            
            if (!email) {
                messageEl.textContent = 'Please enter your email address.';
                messageEl.classList.add('text-red-400');
                return;
            }
            
            if (!terms) {
                messageEl.textContent = 'Please accept the Terms and Conditions.';
                messageEl.classList.add('text-red-400');
                return;
            }
            
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(email)) {  
                messageEl.textContent = 'Please enter a valid email address.';
                messageEl.classList.add('text-red-400');
                return;

            }


            

        