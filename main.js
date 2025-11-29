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


            const cursor = document.querySelector('.cursor');
            cursor.classList.add('mousemove', (e) => {
                cursor.Style.left = e.pageX + 'px';
                cursor.Style.top = e.pageY + 'px';
            }); 

           
            <div class="mobile-menu md:hidden bg-black border-t border-gray-800">
  <div class="container mx-auto px-6 py-4 space-y-4">
    <a href="#about-me" onclick="toggleMobileMenu()" class="block text-gray-300 hover:text-white py-2">About</a>
    <a href="#projects" onclick="toggleMobileMenu()" class="block text-gray-300 hover:text-white py-2">Projects</a>
    <a href="#contact" onclick="toggleMobileMenu()" class="block text-gray-300 hover:text-white py-2">Contact</a>
  </div>
</div>