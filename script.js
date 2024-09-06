function filterProjects(category) {
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        function filterSearch() {
        }

        function measurePing() {
            var xhr = new XMLHttpRequest();
            var startTime, endTime;
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    endTime = Date.now();
                    var pingTime = endTime - startTime;
                    document.getElementById("ping").textContent = pingTime + " ms";
                }
            };
            xhr.open("GET", location.href + "?t=" + new Date().getTime());
            startTime = Date.now();
            xhr.send();
        }
        setInterval(measurePing, 1000);

        function updateTime() {
            const now = new Date();
            const options = {
                timeZone: 'Asia/Manila',
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
            const formattedTime = now.toLocaleString('en-US', options);
            document.getElementById('time').textContent = formattedTime;
        }
        updateTime();
        setInterval(updateTime, 1000);

        window.onscroll = function() {
            const backToTopButton = document.getElementById("backToTop");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
      function showPrivacyPolicy() {
        Swal.fire({
          title: 'Privacy Policy',
          html: `<p><strong>Introduction:</strong> Your privacy is important to us. We are committed to safeguarding your personal data while you use our tools designed for content creation, sharing, and automation.</p>
                     
                     <br>
                     
                     <p><strong>Information Collection:</strong> We collect information such as your email address, IP address, and social media tokens when you use our tools. This data is only used to improve our services and personalize your experience.</p>
                     
                     <br>
                     
                     <p><strong>Use of Data:</strong> Your data is never shared with third parties. It is strictly used to enhance the performance of our web tools, ensure security, and enable advanced features.</p>
                     
                     <br>
                     
                     <p><strong>Cookies:</strong> We use cookies to store preferences and analyze user behavior. This helps us improve user experience and optimize site performance. You can disable cookies in your browser settings.</p>
                     
                     <br>
                     
                     <p><strong>Security:</strong> We take reasonable steps to protect your data from unauthorized access or disclosure. However, we cannot guarantee absolute security due to the inherent risks of using the internet.</p>
                     
                     <br>
                     
                     <p><strong>Changes to This Policy:</strong> We may update this Privacy Policy from time to time. You will be notified of any significant changes via the platform or email.</p>`,
          icon: 'info',
          confirmButtonText: 'Close',
          customClass: {
            popup: 'swal-custom',
          },
        });
      }
      
      function showTermsOfService() {
        Swal.fire({
          title: 'Terms of Service',
          html: `<p><strong>Introduction:</strong> By accessing and using our web tools, you agree to these terms and conditions.</p>
                     
                     <br>
                     
                     <p><strong>Use of Services:</strong> Our tools are provided for personal and lawful use only. You must not misuse or abuse the tools provided, including attempts to circumvent any security or limits on the tools.</p>
                     
                     <br>
                     
                     <p><strong>User Responsibility:</strong> You are responsible for ensuring the data you input into our tools complies with all applicable laws. Any misuse, such as using the tools for unlawful activities, is prohibited.</p>
                     
                     <br>
                     
                     <p><strong>Intellectual Property:</strong> All content and tools provided on our platform are our intellectual property. You may not copy, modify, or distribute our tools without permission.</p>
                     
                     <br>
                     
                     <p><strong>Service Availability:</strong> We strive to keep the services operational but cannot guarantee uninterrupted or error-free access to the tools. We reserve the right to modify or terminate any service at any time without notice.</p>
                     
                     <br>
                     
                     <p><strong>Changes to Terms:</strong> We may update these terms from time to time. Continued use of our tools constitutes acceptance of the revised terms.</p>`,
          icon: 'warning',
          confirmButtonText: 'Close',
          customClass: {
            popup: 'swal-custom',
          },
        });
      }
        
       function showContactInfo() {
         Swal.fire({
           title: 'Contact Us',
           html: `<p>If you have any questions, feedback, or suggestions, feel free to reach out to us! We are always here to help improve your experience.</p>
                      
                      <br>
                      
                      <p><strong>The source code for our website's static HTML is open-source and freely accessible.</strong> We believe in transparency for the platform itself.</p>
                      
                      <br>
                      
                      <p><strong>If you'd like to contribute</strong> or check out the source code for the static site, feel free to visit and collaborate with us!</p>
                      
                      <br>
                      
                      <p>For any <strong>technical issues</strong>, feature requests, or general inquiries, please reach out via our contact form on the website.</p>
                      
                      <br>
                      
                      <p>We also welcome <strong>suggestions on how to improve our tools</strong> or new features you’d like to see. Your input is invaluable in helping us enhance our services.</p>
                      
                      <br>
                      
                      <p><strong>Stay updated</strong> with our latest news and updates by subscribing to our newsletter or following us on social media.</p>`,
           icon: 'info',
           confirmButtonText: 'Close',
           customClass: {
             popup: 'swal-custom',
           },
         });
       }