document.addEventListener("DOMContentLoaded", function () {
  // ✅ MENU TOGGLE
  window.openMenu = () => document.body.classList.add("menu--open");
  window.closeMenu = () => document.body.classList.remove("menu--open");

  // ✅ VIDEO CONTROLS
  const video = document.querySelector(".header__video");
  let controlsTimeout;

  if (video) {
    video.classList.remove("controls-visible");

    video.addEventListener("pointerenter", () => {
      video.classList.add("controls-visible");
    });

    video.addEventListener("pointerleave", () => {
      video.classList.remove("controls-visible");
    });

    video.addEventListener("touchstart", () => {
      video.classList.add("controls-visible");
    });

    video.addEventListener("touchend", () => {
      if (controlsTimeout) clearTimeout(controlsTimeout);
      controlsTimeout = setTimeout(() => {
        video.classList.remove("controls-visible");
      }, 3000);
    });
  }

  // ✅ PRICING TOGGLE FUNCTIONALITY
  const planOptions = document.querySelectorAll(".plan-option");
  const details = document.getElementById("plan-details");

  const planContent = {
    weekly: {
      title: "Weekly Plan",
      price: "$12.50 billed weekly",
      features: [
        { label: "Access", value: "Full features" },
        { label: "Support", value: "Email & chat" },
        { label: "Commitment", value: "Cancel anytime" },
      ],
    },
    biweekly: {
      title: "Biweekly Plan",
      price: "$25 billed every 2 weeks",
      features: [
        { label: "Access", value: "Full features" },
        { label: "Support", value: "Email & chat" },
        { label: "Commitment", value: "Cancel anytime" },
      ],
    },
    monthly: {
      title: "Monthly Plan",
      price: "$50 billed monthly",
      features: [
        { label: "Access", value: "Full features" },
        { label: "Support", value: "Email & chat" },
        { label: "Commitment", value: "Cancel anytime" },
      ],
    },
    annually: {
      title: "Annual Plan",
      price: "$600 billed annually",
      features: [
        { label: "Access", value: "Full features" },
        { label: "Support", value: "Email & chat" },
        { label: "Commitment", value: "Cancel anytime" },
      ],
    },
  };

  planOptions.forEach((option) => {
    option.addEventListener("click", () => {
      planOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      const planKey = option.getAttribute("data-plan");
      const content = planContent[planKey];

      if (!content) return;

      details.innerHTML = `
        <h2>${content.title}</h2>
        <p class="monthly-price">${content.price}</p>
        <ul class="plan-info">
          ${content.features
            .map(
              (feature) =>
                `<li><strong>${feature.label}:</strong> ${feature.value}</li>`
            )
            .join("")}
        </ul>
        <button class="start-btn">START NOW</button>
      `;
    });
  });

  // ✅ FAQ ACCORDION
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((i) => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });

  // ✅ TESTIMONIAL SWIPER — Handles 15+ slides
  if (typeof Swiper !== "undefined") {
    new Swiper("#testimonials .testimonial-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: "#testimonials .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#testimonials .swiper-button-next",
        prevEl: "#testimonials .swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });
  }

  // ✅ CONTACT MODAL
  const contactBtn = document.getElementById("contact-button");
  const contactModal = document.getElementById("contact-modal");
  const closeBtn = document.querySelector(".close-button");

  if (contactBtn && contactModal && closeBtn) {
    contactBtn.addEventListener("click", () => {
      contactModal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      contactModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.style.display = "none";
      }
    });
  }
});













