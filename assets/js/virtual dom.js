const virtualDOM = {
  head: {
    links: [
      {
        rel: "stylesheet",
        href: "/assets/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/css/style.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
      },
    ],
    scripts: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js",
      },
      {
        src: "/assets/js/bootstrap.bundle.min.js",
        defer: true,
      },
      {
        src: "/assets/js/jquery.js",
        defer: true,
      },
      {
        src: "/assets/js/script.js",
        defer: true,
      },
    ],
  },
};

$(document).ready(function(){
  $.each(virtualDOM.head.links, function(index, link) {
    $("<link>").attr("rel", link.rel).attr("href", link.href).appendTo("head");
  });
  
  $.each(virtualDOM.head.scripts, function(index, script) {
    $("<script>").attr("src", script.src).appendTo("head");
  });
})
