document.addEventListener("DOMContentLoaded", function () {
  var qs = function (selector, root) {
    return (root || document).querySelector(selector);
  };

  var qsa = function (selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  };

  var setText = function (selector, text, root) {
    var element = qs(selector, root);
    if (element) {
      element.textContent = text;
    }
    return element;
  };

  var setHTML = function (selector, html, root) {
    var element = qs(selector, root);
    if (element) {
      element.innerHTML = html;
    }
    return element;
  };

  var ensureMeta = function (attribute, key, content) {
    var selector = "meta[" + attribute + '="' + key + '"]';
    var element = qs(selector);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
    return element;
  };

  var ensureLink = function (rel, href) {
    var element = qs('link[rel="' + rel + '"]');
    if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", rel);
      document.head.appendChild(element);
    }
    element.setAttribute("href", href);
    return element;
  };

  var ensureJsonLd = function (id, payload) {
    var element = qs('script[data-schema-id="' + id + '"]');
    if (!element) {
      element = document.createElement("script");
      element.type = "application/ld+json";
      element.setAttribute("data-schema-id", id);
      document.head.appendChild(element);
    }
    element.textContent = JSON.stringify(payload);
    return element;
  };

  var splitTitle = function (lines) {
    return lines
      .map(function (line) {
        return '<span class="title-line' + (line.script ? ' title-line--script' : '') + '">' + line.text + "</span>";
      })
      .join("");
  };

  var starMarkup = '<img src="./site-images/star.png" alt="img"> ';
  var brandLogoMarkup = "<img src=\"./site-images/onionsdiv-logo.png\" alt=\"Onion's Div logo\" class=\"brand-logo__image\">";

  var serviceMediaPairs = [
    ["./site-images/service-1a.jpg", "./site-images/service-1b.jpg"],
    ["./site-images/service-2a.jpg", "./site-images/service-2b.jpg"],
    ["./site-images/service-3a.jpg", "./site-images/service-3b.jpg"],
    ["./site-images/service-4a.jpg", "./site-images/service-4b.jpg"],
    ["./site-images/service-5a.jpg", "./site-images/service-5b.jpg"],
    ["./site-images/service-6a.jpg", "./site-images/service-6b.jpg"]
  ];

  var projectMediaPairs = [
    ["./site-images/service-1a.jpg", "./site-images/hero-stock.jpg"],
    ["./site-images/work-process-photo.jpg", "./site-images/choose-us-1-1.jpg"],
    ["./site-images/about-1-1.jpg", "./site-images/service-4a.jpg"]
  ];

  var siteTitle = "Onion's Div | AI Automation, Premium Websites & Digital Growth Systems";
  var siteDescription = "Onion's Div helps businesses with AI workflow automation, premium website design, custom web development, analytics, and digital growth systems across the United States, United Kingdom, Canada, and Pakistan.";
  var siteProtocol = window.location.protocol;
  var isWebContext = siteProtocol === "http:" || siteProtocol === "https:";
  var siteBaseUrl = isWebContext ? window.location.origin.replace(/\/$/, "") : "https://onionsdiv.com";
  var siteBasePath = isWebContext ? (window.location.pathname || "/").replace(/[^/]*$/, "") : "/";
  var siteUrl = siteBaseUrl + siteBasePath;
  var siteImage = siteBaseUrl + siteBasePath + "onionsdiv-logo.png";

  document.title = siteTitle;
  document.documentElement.setAttribute("lang", "en");
  document.body.classList.add("od-premium-home");

  qsa(".brand-logo").forEach(function (logo) {
    logo.innerHTML = brandLogoMarkup;
    logo.setAttribute("aria-label", "Onion's Div");
  });

  if (!qs("#od-live-background")) {
    var cloudConfigs = [
      { left: "-8%", top: "2%", size: "320px", duration: "31s", delay: "-4s", opacity: "0.42", parallaxX: "42px", parallaxY: "26px", driftX: "34px", driftY: "16px" },
      { left: "8%", top: "12%", size: "220px", duration: "26s", delay: "-11s", opacity: "0.28", parallaxX: "24px", parallaxY: "18px", driftX: "22px", driftY: "12px" },
      { left: "26%", top: "4%", size: "280px", duration: "29s", delay: "-8s", opacity: "0.25", parallaxX: "28px", parallaxY: "20px", driftX: "18px", driftY: "16px" },
      { left: "48%", top: "10%", size: "240px", duration: "27s", delay: "-14s", opacity: "0.2", parallaxX: "20px", parallaxY: "14px", driftX: "26px", driftY: "10px" },
      { left: "70%", top: "6%", size: "300px", duration: "34s", delay: "-7s", opacity: "0.3", parallaxX: "30px", parallaxY: "22px", driftX: "30px", driftY: "16px" },
      { left: "86%", top: "16%", size: "230px", duration: "25s", delay: "-16s", opacity: "0.2", parallaxX: "18px", parallaxY: "14px", driftX: "18px", driftY: "12px" },
      { left: "-6%", top: "36%", size: "260px", duration: "30s", delay: "-10s", opacity: "0.24", parallaxX: "26px", parallaxY: "18px", driftX: "26px", driftY: "18px" },
      { left: "16%", top: "42%", size: "340px", duration: "38s", delay: "-18s", opacity: "0.18", parallaxX: "34px", parallaxY: "20px", driftX: "38px", driftY: "22px" },
      { left: "42%", top: "38%", size: "250px", duration: "28s", delay: "-9s", opacity: "0.2", parallaxX: "22px", parallaxY: "18px", driftX: "20px", driftY: "12px" },
      { left: "64%", top: "44%", size: "310px", duration: "36s", delay: "-13s", opacity: "0.22", parallaxX: "30px", parallaxY: "20px", driftX: "34px", driftY: "18px" },
      { left: "82%", top: "40%", size: "240px", duration: "27s", delay: "-5s", opacity: "0.18", parallaxX: "20px", parallaxY: "14px", driftX: "22px", driftY: "10px" },
      { left: "4%", top: "66%", size: "300px", duration: "35s", delay: "-21s", opacity: "0.2", parallaxX: "28px", parallaxY: "22px", driftX: "28px", driftY: "18px" },
      { left: "24%", top: "74%", size: "220px", duration: "24s", delay: "-6s", opacity: "0.16", parallaxX: "18px", parallaxY: "12px", driftX: "20px", driftY: "10px" },
      { left: "46%", top: "70%", size: "290px", duration: "33s", delay: "-15s", opacity: "0.18", parallaxX: "26px", parallaxY: "18px", driftX: "24px", driftY: "16px" },
      { left: "68%", top: "78%", size: "330px", duration: "37s", delay: "-12s", opacity: "0.2", parallaxX: "32px", parallaxY: "24px", driftX: "36px", driftY: "20px" },
      { left: "88%", top: "70%", size: "260px", duration: "29s", delay: "-19s", opacity: "0.16", parallaxX: "20px", parallaxY: "14px", driftX: "22px", driftY: "12px" }
    ];

    var liveBackground = document.createElement("div");
    liveBackground.id = "od-live-background";
    liveBackground.setAttribute("aria-hidden", "true");

    cloudConfigs.forEach(function (config, index) {
      var cloud = document.createElement("span");
      cloud.className = "od-cloud";
      cloud.style.setProperty("--left", config.left);
      cloud.style.setProperty("--top", config.top);
      cloud.style.setProperty("--size", config.size);
      cloud.style.setProperty("--duration", config.duration);
      cloud.style.setProperty("--delay", config.delay);
      cloud.style.setProperty("--opacity", config.opacity);
      cloud.style.setProperty("--parallax-x", config.parallaxX);
      cloud.style.setProperty("--parallax-y", config.parallaxY);
      cloud.style.setProperty("--drift-x", config.driftX);
      cloud.style.setProperty("--drift-y", config.driftY);
      cloud.style.setProperty("--hue-shift", index % 3 === 0 ? "0deg" : index % 3 === 1 ? "12deg" : "-8deg");
      liveBackground.appendChild(cloud);
    });

    document.body.insertBefore(liveBackground, document.body.firstChild);
    var cloudNodes = qsa(".od-cloud", liveBackground).map(function (element, index) {
      return {
        element: element,
        baseLeft: parseFloat(cloudConfigs[index].left),
        baseTop: parseFloat(cloudConfigs[index].top),
        size: parseFloat(cloudConfigs[index].size),
        parallaxX: parseFloat(cloudConfigs[index].parallaxX),
        parallaxY: parseFloat(cloudConfigs[index].parallaxY)
      };
    });

    var mouseState = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5
    };

    var renderCloudRepel = function () {
      var viewportWidth = Math.max(window.innerWidth, 1);
      var viewportHeight = Math.max(window.innerHeight, 1);
      var mouseRatioX = mouseState.x / viewportWidth - 0.5;
      var mouseRatioY = mouseState.y / viewportHeight - 0.5;

      cloudNodes.forEach(function (cloud) {
        var centerX = viewportWidth * (cloud.baseLeft / 100) + cloud.size * 0.5;
        var centerY = viewportHeight * (cloud.baseTop / 100) + cloud.size * 0.31;
        var deltaX = centerX - mouseState.x;
        var deltaY = centerY - mouseState.y;
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
        var radius = cloud.size * 0.95 + 140;
        var parallaxOffsetX = mouseRatioX * cloud.parallaxX;
        var parallaxOffsetY = mouseRatioY * cloud.parallaxY;
        var repelStrength = distance < radius ? Math.pow(1 - distance / radius, 1.65) : 0;
        var repelOffsetX = (deltaX / distance) * repelStrength * 120;
        var repelOffsetY = (deltaY / distance) * repelStrength * 120;

        cloud.element.style.transform =
          "translate3d(" +
          (parallaxOffsetX + repelOffsetX).toFixed(1) +
          "px, " +
          (parallaxOffsetY + repelOffsetY).toFixed(1) +
          "px, 0)";
      });

      window.requestAnimationFrame(renderCloudRepel);
    };

    window.addEventListener(
      "mousemove",
      function (event) {
        mouseState.x = event.clientX || window.innerWidth * 0.5;
        mouseState.y = event.clientY || window.innerHeight * 0.5;
      },
      { passive: true }
    );

    window.addEventListener("mouseleave", function () {
      mouseState.x = window.innerWidth * 0.5;
      mouseState.y = window.innerHeight * 0.5;
    });

    renderCloudRepel();
  }

  ensureMeta("name", "description", siteDescription);
  ensureMeta("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
  ensureMeta("name", "author", "Onion's Div");
  ensureMeta("name", "theme-color", "#264661");
  ensureMeta("property", "og:type", "website");
  ensureMeta("property", "og:site_name", "Onion's Div");
  ensureMeta("property", "og:title", siteTitle);
  ensureMeta("property", "og:description", "AI workflow automation, premium websites, custom development, and digital growth systems for modern businesses.");
  ensureMeta("property", "og:url", siteUrl);
  ensureMeta("property", "og:image", siteImage);
  ensureMeta("name", "twitter:card", "summary_large_image");
  ensureMeta("name", "twitter:title", siteTitle);
  ensureMeta("name", "twitter:description", "AI workflow automation, premium websites, custom development, and digital growth systems for modern businesses.");
  ensureMeta("name", "twitter:image", siteImage);
  ensureLink("canonical", siteUrl);
  ensureJsonLd("od-core-schema", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": siteUrl + "#organization",
        name: "Onion's Div",
        url: siteUrl,
        logo: siteImage,
        image: siteImage,
        email: "info@onionsdiv.com",
        telephone: "+1-317-527-1006",
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Pakistan" }
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+1-317-527-1006",
            email: "info@onionsdiv.com",
            availableLanguage: ["en"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": siteUrl + "#website",
        url: siteUrl,
        name: "Onion's Div",
        publisher: {
          "@id": siteUrl + "#organization"
        }
      }
    ]
  });

  qsa(".tm-color-switcher, .tm-purchase-floating-box, .colorpicker").forEach(function (element) {
    element.remove();
  });

  qsa('[fill="#FF6B1E"], [stroke="#FF6B1E"]').forEach(function (node) {
    if (node.getAttribute("fill") === "#FF6B1E") {
      node.setAttribute("fill", "#9CCBB7");
    }
    if (node.getAttribute("stroke") === "#FF6B1E") {
      node.setAttribute("stroke", "#9CCBB7");
    }
  });

  [
    [".hero-section", "home"],
    [".about-section", "about"],
    [".service-section", "services"],
    [".project-section", "projects"],
    [".work-process-section", "process"],
    [".faq-section", "faq"],
    [".contact-section", "contact"]
  ].forEach(function (entry) {
    var section = qs(entry[0]);
    if (section) {
      section.id = entry[1];
    }
  });

  qsa(".main-menu a, .mobile-menu .navigation a").forEach(function (link) {
    var key = link.textContent.trim().toLowerCase();
    var map = {
      home: "#home",
      about: "#about",
      services: "#services",
      "case studies": "#projects",
      process: "#process",
      faq: "#faq",
      contact: "#contact"
    };
    if (map[key]) {
      link.setAttribute("href", map[key]);
    }
  });

  qsa(".contact-btn").forEach(function (button) {
    button.textContent = "Book a Strategy Call";
    button.setAttribute("href", "#contact");
  });

  setHTML(
    ".hero-section .hero-title",
    splitTitle([
      { text: "AI Execution Premium Websites" },
      { text: "And Digital Growth Systems", script: true },
      { text: "For Modern Businesses" }
    ])
  );
  setText(
    ".hero-section .hero-text",
    "Smart Systems, Premium Execution, And Practical AI For Modern Teams."
  );

  var heroCircleLink = qs(".hero-section .arrow-icon");
  if (heroCircleLink) {
    heroCircleLink.setAttribute("href", "#services");
  }

  var heroButton = qs(".hero-section .btn-style-one");
  if (heroButton) {
    heroButton.setAttribute("href", "#services");
    setText(".btn-title", "See Our Solutions", heroButton);
  }

  [
    {
      title: "AI Workflow Automation",
      text: "We replace slow manual steps with smart automations for lead handling, approvals, CRM updates, reporting, and internal coordination."
    },
    {
      title: "Product Strategy & UX",
      text: "We plan user journeys, interface structure, and conversion paths so every digital product feels more premium and easier to use."
    },
    {
      title: "Growth Analytics",
      text: "We connect tracking, dashboards, and performance reporting so business decisions are backed by cleaner data and clearer signals."
    }
  ].forEach(function (item, index) {
    var block = qsa(".feature-section-2 .feature-block")[index];
    if (!block) {
      return;
    }
    setText(".title", item.title, block);
    setText(".text", item.text, block);
    var link = qs(".arrow-link", block);
    if (link) {
      var svg = qs("svg", link);
      link.setAttribute("href", "#services");
      link.innerHTML = '<span class="text">See Service</span>' + (svg ? svg.outerHTML : "");
    }
  });

  setHTML(".about-section .sec-title .sub-title", starMarkup + "About Onion's Div");
  setHTML(
    ".about-section .sec-title .title",
    splitTitle([
      { text: "An AI And Digital Solutions Agency" },
      { text: "Built To Modernize How Businesses Grow", script: true }
    ])
  );
  setText(
    ".about-section .about-text",
    "We work with founders, service businesses, and growing teams that need more than surface-level design. Onion's Div combines business thinking, UI direction, development, and AI implementation into systems that create clarity, speed, and better digital outcomes."
  );

  [
    "AI-first planning with business clarity",
    "Premium interfaces with conversion-focused UX",
    "Delivery across four active regions",
    "Ongoing optimization, support, and growth tracking"
  ].forEach(function (item, index) {
    var listItem = qsa(".about-section .about-list-items li")[index];
    if (listItem) {
      listItem.innerHTML = '<i class="fa-solid fa-circle-check"></i>' + item;
    }
  });

  var aboutCount = qs(".about-section .about-thumb-items .count-box");
  if (aboutCount) {
    aboutCount.textContent = "4+";
  }
  var aboutThumb = qs(".about-section .about-thumb-items .thumb1 img");
  if (aboutThumb) {
    aboutThumb.setAttribute("src", "./site-images/about-1-1.jpg");
    aboutThumb.setAttribute("alt", "Modern office collaboration");
  }
  var aboutCountLabel = qs(".about-section .about-thumb-items .content p");
  if (aboutCountLabel) {
    aboutCountLabel.innerHTML = "Active Markets<br>Served Globally";
  }

  var aboutButton = qs(".about-section .btn-style-one");
  if (aboutButton) {
    aboutButton.setAttribute("href", "#contact");
    setText(".btn-title", "Book Discovery Call", aboutButton);
  }

  setHTML(".service-section .sec-title .sub-title", starMarkup + "Our Services");
  setHTML(
    ".service-section .sec-title .title",
    splitTitle([
      { text: "High-Impact Solutions For Growth" },
      { text: "Automation And Digital Execution", script: true }
    ])
  );

  [
    {
      title: "AI Workflow Automation",
      text: "Automate approvals, lead routing, admin work, and internal operations with systems that save time and remove friction."
    },
    {
      title: "Premium Website Design",
      text: "Design polished websites with stronger credibility, sharper messaging, and cleaner conversion journeys."
    },
    {
      title: "Custom Web Development",
      text: "Build responsive, scalable websites and custom experiences around your business goals, integrations, and workflows."
    },
    {
      title: "Product & SaaS Builds",
      text: "Shape dashboards, portals, internal tools, and SaaS products with practical UX and reliable delivery."
    },
    {
      title: "SEO & Performance Growth",
      text: "Improve discoverability, page speed, landing page quality, and technical health to support long-term growth."
    },
    {
      title: "Analytics & Paid Media",
      text: "Track the right data, read user behavior clearly, and align campaigns with measurable business outcomes."
    }
  ].forEach(function (item, index) {
    var block = qsa(".service-section .service-block-one")[index];
    if (!block) {
      return;
    }
    var innerBlock = qs(".inner-block", block);
    if (innerBlock && !qs(".service-media", innerBlock)) {
      var media = document.createElement("div");
      media.className = "service-media";
      media.innerHTML =
        '<img src="' + serviceMediaPairs[index][0] + '" alt="' + item.title + '">' +
        '<img src="' + serviceMediaPairs[index][1] + '" alt="' + item.title + '">';
      innerBlock.insertBefore(media, innerBlock.firstChild);
    }
    var titleLink = qs(".title a", block);
    if (titleLink) {
      titleLink.textContent = item.title;
      titleLink.setAttribute("href", "#contact");
    }
    setText(".text", item.text, block);
    var link = qs(".arrow-link", block);
    if (link) {
      var svg = qs("svg", link);
      link.setAttribute("href", "#contact");
      link.innerHTML = "Talk With Us" + (svg ? svg.outerHTML : "");
    }
  });

  setHTML(".project-section .sec-title .sub-title", starMarkup + "Selected Work");
  setHTML(
    ".project-section .sec-title .title",
    splitTitle([
      { text: "Selected Work" },
      { text: "Premium Design With Measurable Business Movement", script: true }
    ])
  );

  var projectButton = qs(".project-section .project-btn .btn-style-one");
  if (projectButton) {
    projectButton.setAttribute("href", "#contact");
    setText(".btn-title", "Start Your Project", projectButton);
  }

  [
    {
      title: "AI Lead Qualification Flow",
      tags: ["AI Automation", "Operations"]
    },
    {
      title: "Multi-Region Website Relaunch",
      tags: ["UX Strategy", "Development"]
    },
    {
      title: "Executive Growth Insights Hub",
      tags: ["Analytics", "Performance"]
    }
  ].forEach(function (item, index) {
    var block = qsa(".project-section .project-block")[index];
    if (!block) {
      return;
    }
    var hoverImages = qsa(".image-block > img.hover-img", block);
    if (hoverImages[0]) {
      hoverImages[0].setAttribute("src", projectMediaPairs[index][0]);
      hoverImages[0].setAttribute("alt", item.title);
    }
    if (hoverImages[1]) {
      hoverImages[1].setAttribute("src", projectMediaPairs[index][1]);
      hoverImages[1].setAttribute("alt", item.title);
    }
    var titleLink = qs(".title a", block);
    if (titleLink) {
      titleLink.textContent = item.title;
      titleLink.setAttribute("href", "#contact");
    }
    var arrow = qs(".image-block .arrow-icon", block);
    if (arrow) {
      arrow.setAttribute("href", "#contact");
    }
    var tagList = qs("ul", block);
    if (tagList) {
      tagList.innerHTML =
        "<li>" +
        item.tags[0] +
        '</li><li class="dot"></li><li>' +
        item.tags[1] +
        "</li>";
    }
  });

  var marqueePhrases = [
    "AI Workflow Automation",
    "Premium Website Design",
    "Custom Web Development",
    "Growth Analytics",
    "Digital Systems That Scale"
  ];

  qsa(".marquee-area2 .marquee-group").forEach(function (group) {
    qsa(".text", group).forEach(function (item, index) {
      var icon = qs("img", item);
      item.innerHTML = (icon ? icon.outerHTML : "") + marqueePhrases[index % marqueePhrases.length];
    });
  });

  setHTML(".work-process-section .sec-title .sub-title", starMarkup + "Our Work Process");
  setHTML(
    ".work-process-section .sec-title .title",
    splitTitle([
      { text: "A Clear Structured Process" },
      { text: "From Discovery To Scale", script: true }
    ])
  );

  [
    {
      title: "Discovery & Audit",
      text: "We study business goals, digital gaps, user friction, and the outcomes your next system or website actually needs to support."
    },
    {
      title: "Solution Architecture",
      text: "We define the right mix of design, development, automation, analytics, and implementation priorities before build work starts."
    },
    {
      title: "Design, Build & Automate",
      text: "We shape the interface, build the product, and connect the workflows needed to make the solution usable, elegant, and scalable."
    },
    {
      title: "Launch, Optimize & Support",
      text: "We launch cleanly, monitor results, and keep improving the system with support, optimization, and better data visibility."
    }
  ].forEach(function (item, index) {
    var block = qsa(".work-process-section .working-block-one")[index];
    if (!block) {
      return;
    }
    setText(".title", item.title, block);
    setText(".text", item.text, block);
  });

  var processImage = qs(".work-process-section .work-process-thumb img");
  if (processImage) {
    processImage.setAttribute("src", "./site-images/work-process-photo.jpg");
    processImage.setAttribute("alt", "Work process planning");
  }

  setHTML(".choose-us-section .sec-title .sub-title", starMarkup + "Why Onion's Div");
  setHTML(
    ".choose-us-section .sec-title .title",
    splitTitle([
      { text: "Why Businesses Choose Onion's Div" },
      { text: "Built For Better Delivery And Cleaner Growth", script: true }
    ])
  );
  setText(
    ".choose-us-section .choose-text",
    "We bring together strategic thinking, elegant interfaces, web delivery, and practical AI execution so your business moves faster without feeling templated or low quality."
  );

  [
    {
      title: "Long-Term Support",
      text: "From launch refinements to future upgrades, we stay involved enough to keep your digital system useful after the first release."
    },
    {
      title: "Data-Driven Strategy",
      text: "Our recommendations come from business goals, user behavior, and real performance signals instead of vague creative guesswork."
    }
  ].forEach(function (item, index) {
    var box = qsa(".choose-us-section .feature-box")[index];
    if (!box) {
      return;
    }
    setText(".title", item.title, box);
    setText(".text", item.text, box);
  });

  var chooseClientCount = qs(".choose-us-section .client-image span");
  if (chooseClientCount) {
    chooseClientCount.textContent = "04";
  }
  var chooseClientImage = qs(".choose-us-section .client-image");
  if (chooseClientImage) {
    chooseClientImage.innerHTML = "<span>04</span>";
  }
  var chooseClientText = qs(".choose-us-section .choose-client-info p");
  if (chooseClientText) {
    chooseClientText.innerHTML = "Serving clients across<br>four active markets";
  }
  var chooseCounter = qs(".choose-us-section .choose-counter .count-box");
  if (chooseCounter) {
    chooseCounter.textContent = "24";
  }
  var chooseCounterLabel = qs(".choose-us-section .choose-counter p");
  if (chooseCounterLabel) {
    chooseCounterLabel.innerHTML = "Across Time Zones<br>and Markets";
  }
  var chooseImage = qs(".choose-us-section .choose-us-image-1 img");
  if (chooseImage) {
    chooseImage.setAttribute("src", "./site-images/choose-us-1-1.jpg");
    chooseImage.setAttribute("alt", "Onion's Div team collaboration");
  }

  setHTML(".faq-section .sec-title .sub-title", starMarkup + "FAQ");
  setHTML(
    ".faq-section .sec-title .title",
    splitTitle([
      { text: "Answers For Growing Brands" },
      { text: "Founders And Digital Teams", script: true }
    ])
  );

  var faqItems = [
    {
      question: "What does Onion's Div do?",
      answer: "We help businesses with AI automation, premium website design, custom development, analytics, and digital growth systems."
    },
    {
      question: "Do you work with startups and established businesses?",
      answer: "Yes. We work with startups, service businesses, and established teams that need sharper digital systems and better execution."
    },
    {
      question: "Can you add AI features to our website or internal workflow?",
      answer: "Yes. We can build AI-assisted lead flows, internal automations, smart reporting setups, and practical workflow improvements."
    },
    {
      question: "How does your process usually work?",
      answer: "We start with discovery, shape the solution, move into design and build, then support launch, reporting, and optimization."
    },
    {
      question: "Do you offer support after launch?",
      answer: "Yes. We offer refinements, updates, issue resolution, and ongoing performance support after the initial delivery."
    },
    {
      question: "Which countries do you serve?",
      answer: "We actively serve clients in the United States, United Kingdom, Canada, and Pakistan."
    },
    {
      question: "How can we get started?",
      answer: "Reach out through the contact section with your goals, and we will guide you toward the right scope, timeline, and next step."
    }
  ];

  faqItems.forEach(function (item, index) {
    var block = qsa(".faq-section .faq-block-one")[index];
    if (!block) {
      return;
    }
    setText(".title-box .title", item.question, block);
    setText(".content-box .text", item.answer, block);
  });

  ensureJsonLd("od-faq-schema", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(function (item) {
      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      };
    })
  });

  setHTML(".contact-section .sec-title .sub-title", starMarkup + "Contact Us");
  setHTML(
    ".contact-section .sec-title .title",
    splitTitle([
      { text: "Let's Design, Build, And Automate" },
      { text: "Something Smarter", script: true }
    ])
  );
  setText(
    ".contact-section .contact-text",
    "If you need a premium website, AI automation, or a stronger digital system with refined execution, Onion's Div is ready to shape the strategy and delivery."
  );
  var contactImage = qs(".contact-section .contact-image img");
  if (contactImage) {
    contactImage.setAttribute("src", "./site-images/contact-1-1.jpg");
    contactImage.setAttribute("alt", "Digital planning session");
  }

  var contactLists = qsa(".contact-section .contact-list");
  if (contactLists[0]) {
    setText(".title", "Locations", contactLists[0]);
    var locationText = qs("p", contactLists[0]);
    if (locationText) {
      locationText.textContent = "United States, United Kingdom, Canada, Pakistan";
    }
  }
  if (contactLists[1]) {
    setText(".title", "Email & Phone", contactLists[1]);
    var detailText = qs("p", contactLists[1]);
    if (detailText) {
      detailText.innerHTML =
        '<a href="mailto:info@onionsdiv.com" class="d-block">info@onionsdiv.com</a>' +
        '<a href="tel:+13175271006">+1 (317) 527-1006</a>';
    }
  }

  var contactForm = qs("#contact-form");
  if (contactForm) {
    contactForm.setAttribute("action", "#contact");
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }

  [
    "Your Name",
    "Work Email",
    "Phone Number",
    "Project Type",
    "Tell us about your goals"
  ].forEach(function (placeholder, index) {
    var field = qsa(".contact-form-box input, .contact-form-box textarea")[index];
    if (field) {
      field.setAttribute("placeholder", placeholder);
    }
  });

  var contactButton = qs(".contact-section .contact-button .btn-style-one");
  if (contactButton) {
    setText(".btn-title", "Request Strategy Call", contactButton);
    contactButton.setAttribute("type", "button");
  }

  var footerLogo = qs(".footer-logo");
  if (footerLogo) {
    footerLogo.className = "footer-logo brand-logo";
    footerLogo.setAttribute("href", "#home");
    footerLogo.innerHTML = brandLogoMarkup;
  }

  var footerMail = qs(".footer-info .mail");
  if (footerMail) {
    footerMail.textContent = "info@onionsdiv.com";
    footerMail.setAttribute("href", "mailto:info@onionsdiv.com");
  }
  var footerPhone = qs(".footer-info .phone");
  if (footerPhone) {
    footerPhone.textContent = "+1 (317) 527-1006";
    footerPhone.setAttribute("href", "tel:+13175271006");
  }

  var footerSpacer = qs(".footer-widget-wrapper .row > .col-xl-2.d-none.d-xl-block");
  if (footerSpacer) {
    footerSpacer.remove();
  }

  var footerColumns = qsa(".footer-widget-wrapper .row > [class*='col-']");
  if (footerColumns[0]) {
    footerColumns[0].classList.add("footer-column--main");
  }
  if (footerColumns[1]) {
    footerColumns[1].classList.add("footer-column--links");
  }
  if (footerColumns[2]) {
    footerColumns[2].classList.add("footer-column--solutions");
  }

  setHTML(
    ".footer-content .title",
    'Ready to build with Onion\'s Div?<span class="d-xl-block">Let\'s plan the next move.</span>'
  );
  setText(
    ".footer-content .title-2",
    "Share your work email and we will reach out with the right next step for your business."
  );

  var footerForm = qs(".footer-content form");
  if (footerForm) {
    footerForm.setAttribute("action", "#contact");
    footerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.hash = "contact";
    });
  }

  var footerField = qs(".footer-content .form-group input");
  if (footerField) {
    footerField.setAttribute("placeholder", "Your work email");
  }

  var footerButton = qs(".footer-content .circle-btn");
  if (footerButton) {
    footerButton.setAttribute("type", "button");
    footerButton.setAttribute("aria-label", "Go to contact section");
    footerButton.addEventListener("click", function () {
      window.location.hash = "contact";
    });
  }

  var footerLists = qsa(".footer-widget-items .user-links");
  if (footerLists[0]) {
    footerLists[0].innerHTML =
      '<li><a href="#about">About</a></li>' +
      '<li><a href="#services">Services</a></li>' +
      '<li><a href="#projects">Case Studies</a></li>' +
      '<li><a href="#process">Process</a></li>' +
      '<li><a href="#contact">Contact</a></li>';
  }
  if (footerLists[1]) {
    footerLists[1].innerHTML =
      '<li><a href="#services">AI Workflow Automation</a></li>' +
      '<li><a href="#services">Premium Website Design</a></li>' +
      '<li><a href="#services">Custom Web Development</a></li>' +
      '<li><a href="#services">Product &amp; SaaS Builds</a></li>' +
      '<li><a href="#services">SEO &amp; Performance Growth</a></li>' +
      '<li><a href="#services">Analytics &amp; Paid Media</a></li>';
  }

  setText(".footer-bottom p", "Copyright 2026 Onion's Div. All rights reserved.");
  var footerMarkets = qs(".footer-bottom .social-icon");
  if (footerMarkets) {
    footerMarkets.innerHTML =
      '<a href="#contact">United States</a>' +
      '<a href="#contact">United Kingdom</a>' +
      '<a href="#contact">Canada</a>' +
      '<a href="#contact">Pakistan</a>';
  }

  qsa(".about-section a[href^='https://'], .service-section a[href^='https://'], .project-section a[href^='https://'], .contact-section a[href^='https://']").forEach(function (link) {
    link.setAttribute("href", "#contact");
  });

  qsa("img").forEach(function (image) {
    image.setAttribute("decoding", "async");
    if (image.classList.contains("brand-logo__image") || image.closest(".hero-section")) {
      image.setAttribute("loading", "eager");
      image.setAttribute("fetchpriority", "high");
      return;
    }
    image.setAttribute("loading", "lazy");
  });
});
