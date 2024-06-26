//jquery

$(document).ready(function() {

    /* framwork */
  
    $('.item').click(function() {
      $(this).addClass("selected");
      $(this).siblings().removeClass("selected");
      $(this).children('.item-arrow').hide();
      $(this).children('.item-arrow-blue').show();
      $('.column-1').children('.column-2-holder').show();
      $(this).siblings().children('.item-arrow').show();
      $(this).siblings().children('.item-arrow-blue').hide();
    });
  
    $('.item-icon-folder, .item-icon-normal').on('dragstart', function(event) { event.preventDefault(); });
  
    /* column-1 */
  
    /* projects */
  
    $('#item-1-projects').click(function(){
        $('#item-1-projects').removeClass("old-selected");
        $('#item-1-projects').children(".item-arrow-grey").hide();
        $('#item-1-projects').siblings().removeClass("old-selected");
        $('#item-1-projects').siblings().children(".item-arrow-grey").hide();
        $('.folder-projects').show();
        $('.folder-projects').siblings().hide();
        $('.folder-projects').children().removeClass("selected");
        $('.folder-projects').children().removeClass("old-selected");
        $('.folder-projects').children().children(".item-arrow-grey").hide();
        $('.folder-projects').children().children(".item-arrow-blue").hide();
        $('.folder-projects').children().children(".item-arrow").show();
    });
  
    /* about */
  
    $('#item-1-about').click(function(){
        $('#item-1-about').removeClass("old-selected");
        $('#item-1-about').children(".item-arrow-grey").hide();
        $('#item-1-about').siblings().removeClass("old-selected");
        $('#item-1-about').siblings().children(".item-arrow-grey").hide();
        $('.folder-about').show();
        $('.folder-about').siblings().hide();
        $('.folder-about').children().removeClass("selected");
        $('.folder-about').children().removeClass("old-selected");
        $('.folder-about').children().children(".item-arrow-grey").hide();
        $('.folder-about').children().children(".item-arrow-blue").hide();
        $('.folder-about').children().children(".item-arrow").show();
    });
  
    /* contact */
  
  
    $('#item-1-contact').click(function(){
        $('#item-1-contact').removeClass("old-selected");
        $('#item-1-contact').children(".item-arrow-grey").hide();
        $('#item-1-contact').siblings().removeClass("old-selected");
        $('#item-1-contact').siblings().children(".item-arrow-grey").hide();
        $('.folder-contact').show();
        $('.folder-contact').siblings().hide();
        $('.folder-contact').children().removeClass("selected");
        $('.folder-contact').children().removeClass("old-selected");
        $('.folder-contact').children().children(".item-arrow-grey").hide();
        $('.folder-contact').children().children(".item-arrow-blue").hide();
        $('.folder-contact').children().children(".item-arrow").show();
    });
  
    /* shop */
  
    $('#item-1-shop').click(function(){
        $('#item-1-shop').removeClass("old-selected");
        $('#item-1-shop').children(".item-arrow-grey").hide();
        $('#item-1-shop').siblings().removeClass("old-selected");
        $('#item-1-shop').siblings().children(".item-arrow-grey").hide();
        $('.folder-shop').show();
        $('.folder-shop').siblings().hide();
        $('.folder-shop').children().removeClass("selected");
        $('.folder-shop').children().removeClass("old-selected");
        $('.folder-shop').children().children(".item-arrow-grey").hide();
        $('.folder-shop').children().children(".item-arrow-blue").hide();
        $('.folder-shop').children().children(".item-arrow").show();
    });
  
    /* press */
  
    $('#item-1-press').click(function(){
        $('#item-1-press').removeClass("old-selected");
        $('#item-1-press').children(".item-arrow-grey").hide();
        $('#item-1-press').siblings().removeClass("old-selected");
        $('#item-1-press').siblings().children(".item-arrow-grey").hide();
        $('.folder-press').show();
        $('.folder-press').siblings().hide();
        $('.folder-press').children().removeClass("selected");
        $('.folder-press').children().removeClass("old-selected");
        $('.folder-press').children().children(".item-arrow-grey").hide();
        $('.folder-press').children().children(".item-arrow-blue").hide();
        $('.folder-press').children().children(".item-arrow").show();
    });
  
    /* awards */
  
    $('#item-1-awards').click(function(){
        $('#item-1-awards').removeClass("old-selected");
        $('#item-1-awards').children(".item-arrow-grey").hide();
        $('#item-1-awards').siblings().removeClass("old-selected");
        $('#item-1-awards').siblings().children(".item-arrow-grey").hide();
        $('.folder-awards').show();
        $('.folder-awards').siblings().hide();
        $('.folder-awards').children().removeClass("selected");
        $('.folder-awards').children().removeClass("old-selected");
        $('.folder-awards').children().children(".item-arrow-grey").hide();
        $('.folder-awards').children().children(".item-arrow-blue").hide();
        $('.folder-awards').children().children(".item-arrow").show();
    });
  
    /* Column-2 */
  
    /* projects */
  
    var container = $('.folder-projects');
    var path = $('#item-1-projects');
    container.click(function(){
      path.removeClass("selected");
      path.addClass("old-selected");
      path.children(".item-arrow-blue").hide();
      path.children(".item-arrow").hide();
      path.children(".item-arrow-grey").show();
    });
  
    /* videos */
  
    $('#item-2-videos').click(function(){
        $('.column-3-holder').show();
        $('.folder-videos').show();
        $('.folder-videos').siblings().hide();
        $('.folder-videos').children().removeClass("old-selected");
        $('.folder-videos').children().removeClass("selected");
        $('#item-2-videos').removeClass("old-selected");
        $('#item-2-videos').children(".item-arrow-grey").hide();
        $('#item-2-videos').children(".item-arrow").hide();
        $('#item-2-videos').siblings().removeClass("old-selected");
        $('#item-2-videos').siblings().children(".item-arrow-grey").hide();
    });
  
    /* websites */
  
    $('#item-2-websites').click(function(){
        $('.column-3-holder').show();
        $('.folder-websites').show();
        $('.folder-websites').siblings().hide();
        $('.folder-websites').children().removeClass("old-selected");
        $('.folder-websites').children().removeClass("selected");
        $('#item-2-websites').removeClass("old-selected");
        $('#item-2-websites').children(".item-arrow-grey").hide();
        $('#item-2-websites').children(".item-arrow").hide();
        $('#item-2-websites').siblings().removeClass("old-selected");
        $('#item-2-websites').siblings().children(".item-arrow-grey").hide();
    });
  
    /* creative direction */
  
    $('#item-2-creative-direction').click(function(){
        $('.column-3-holder').show();
        $('.folder-creative-direction').show();
        $('.folder-creative-direction').siblings().hide();
        $('.folder-creative-direction').children().removeClass("old-selected");
        $('.folder-creative-direction').children().removeClass("selected");
        $('#item-2-creative-direction').removeClass("old-selected");
        $('#item-2-creative-direction').children(".item-arrow-grey").hide();
        $('#item-2-creative-direction').children(".item-arrow").hide();
        $('#item-2-creative-direction').siblings().removeClass("old-selected");
        $('#item-2-creative-direction').siblings().children(".item-arrow-grey").hide();
    });
  
    /* about */
  
    var container = $('.folder-about');
    container.click(function(){
      $('#item-1-about').removeClass("selected");
      $('#item-1-about').addClass("old-selected");
      $('#item-1-about').children(".item-arrow-blue").hide();
      $('#item-1-about').children(".item-arrow").hide();
      $('#item-1-about').children(".item-arrow-grey").show();
    });
  
  
    $('#about').dblclick(function() {
      alert("Hello!! My name is Shyam Patel, currently pursuing Computer Programming in GBC.\n " +

          "My work:\n " +
          "MobiHelp Teaching Assistant\n" +
          "- Enhanced class engagement with creative activities.\n" +
          "- Fostered a supportive learning environment.\n" +
          "- Provided personalized tutoring for improved results.\n" +
          "- Designed interactive Zoom sessions for increased motivation.\n" +
          "\n" +
          "Volunteer at Google Summit\n" +
          "- Contributed to the success of the event through various volunteer activities.\n")

    });

    $('#about2').dblclick(function() {
        alert("Career Goal and Resume Highlights:\n " +
            "\n " +
            "- Advanced Diploma candidate in Computer Programming and Analysis at George Brown College, specializing in front-end and back-end development.\n " +
            "\n " +
            "- Achieved Dean's List recognition for outstanding academic performance in Semester 1, 2022, and Semester 3, 2024.\n" +
            "\n " +
            "- Excelled in front-end development with HTML and CSS in the first year, followed by proficient back-end development in JavaScript and SQL in the second year.\n" +
            "\n " +
            "- Demonstrated expertise by securing a position as a Teaching Assistant, facilitating engaging activities and project-based learning.\n" +
            "\n " +
            "- Leveraged strong interpersonal skills to provide one-on-one tutoring sessions, fostering increased understanding and improved grades for students.\n" +
            "\n " +
            "- Designed interactive Zoom sessions for increased motivation.\n")

    });

    $('#about3').dblclick(function() {
        alert("Summary of George Brown College Skills:\n " +

            "1. Proficient in HTML, CSS, JavaScript, and SQL for web development projects.\n " +
            "\n " +
            "2. Experience in designing and implementing engaging activities and project-based learning.\n " +
            "\n " +
            "3. Strong collaboration and teamwork skills, demonstrated through work as a Teaching Assistant.\n " +
            "\n " +
            "4. Effective communication and mentoring abilities, evidenced by successful one-on-one tutoring sessions.\n " +
            "\n " +
            "5. Commitment to fostering a supportive learning environment and encouraging student interest in STEM education programs.\n ")

    });
  
    /* Contact */
  
    var container = $('.folder-contact');
    container.click(function(){
      $('#item-1-contact').removeClass("selected");
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    /*email*/
  
    $('#item-2-email').dblclick(function() {
        alert("email address copied to clipboard");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($("#email-address").text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
  
    $('#item-2-email').click(function(){
        $('.column-3-holder').hide();
        $('#item-2-jake').siblings().removeClass("old-selected");
        $('#item-2-jake').siblings().children(".item-arrow-grey").hide();
    });
  
    /* yung jake */
  
    $('#item-2-jake').click(function(){
        $('.column-3-holder').show();
        $('.folder-jake').show();
        $('.folder-jake').siblings().hide();
        $('.folder-jake').children().removeClass("old-selected");
        $('.folder-jake').children().removeClass("selected");
        $('#item-2-jake').removeClass("old-selected");
        $('#item-2-jake').children(".item-arrow-grey").hide();
        $('#item-2-jake').children(".item-arrow").hide();
        $('#item-2-jake').siblings().removeClass("old-selected");
        $('#item-2-jake').siblings().children(".item-arrow-grey").hide();
    });
  
    /* vince mckelvie */
  
    $('#item-2-vince').click(function(){
        $('.column-3-holder').show();
        $('.folder-vince').show();
        $('.folder-vince').siblings().hide();
        $('.folder-vince').children().removeClass("old-selected");
        $('.folder-vince').children().removeClass("selected");
        $('#item-2-vince').removeClass("old-selected");
        $('#item-2-vince').children(".item-arrow-grey").hide();
        $('#item-2-vince').children(".item-arrow").hide();
        $('#item-2-vince').siblings().removeClass("old-selected");
        $('#item-2-vince').siblings().children(".item-arrow-grey").hide();
    });
  
    /* theo bark */
  
    $('#item-2-theo').click(function(){
        $('.column-3-holder').show();
        $('.folder-theo').show();
        $('.folder-theo').siblings().hide();
        $('.folder-theo').children().removeClass("old-selected");
        $('.folder-theo').children().removeClass("selected");
        $('#item-2-theo').removeClass("old-selected");
        $('#item-2-theo').children(".item-arrow-grey").hide();
        $('#item-2-theo').children(".item-arrow").hide();
        $('#item-2-theo').siblings().removeClass("old-selected");
        $('#item-2-theo').siblings().children(".item-arrow-grey").hide();
    });
  
    /* corey houck */
  
    $('#item-2-corey').click(function(){
        $('.column-3-holder').show();
        $('.folder-corey').show();
        $('.folder-corey').siblings().hide();
        $('.folder-corey').children().removeClass("old-selected");
        $('.folder-corey').children().removeClass("selected");
        $('#item-2-corey').removeClass("old-selected");
        $('#item-2-corey').children(".item-arrow-grey").hide();
        $('#item-2-corey').children(".item-arrow").hide();
        $('#item-2-corey').siblings().removeClass("old-selected");
        $('#item-2-corey').siblings().children(".item-arrow-grey").hide();
    });
  
    /* shop */
  
    var container = $('.folder-shop');
    container.click(function(){
      $('#item-1-shop').removeClass("selected");
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
    });
  
    /* money phone */
  
    $('#item-2-money-phone').click(function(){
        $('.column-3-holder').show();
        $('.folder-money-phone').show();
        $('.folder-money-phone').siblings().hide();
        $('.folder-money-phone').children().removeClass("old-selected");
        $('.folder-money-phone').children().removeClass("selected");
        $('#item-2-money-phone').removeClass("old-selected");
        $('#item-2-money-phone').children(".item-arrow-grey").hide();
        $('#item-2-money-phone').children(".item-arrow").hide();
        $('#item-2-money-phone').siblings().removeClass("old-selected");
        $('#item-2-money-phone').siblings().children(".item-arrow-grey").hide();
    });
  
    /* usb */
  
    $('#item-2-usb').click(function(){
        $('.column-3-holder').show();
        $('.folder-usb').show();
        $('.folder-usb').siblings().hide();
        $('.folder-usb').children().removeClass("old-selected");
        $('.folder-usb').children().removeClass("selected");
        $('#item-2-usb').removeClass("old-selected");
        $('#item-2-usb').children(".item-arrow-grey").hide();
        $('#item-2-usb').children(".item-arrow").hide();
        $('#item-2-usb').siblings().removeClass("old-selected");
        $('#item-2-usb').siblings().children(".item-arrow-grey").hide();
    });
  
    /* squad hat */
  
    $('#item-2-squad-hats').click(function(){
        $('.column-3-holder').show();
        $('.folder-squad-hats').show();
        $('.folder-squad-hats').siblings().hide();
        $('.folder-squad-hats').children().removeClass("old-selected");
        $('.folder-squad-hats').children().removeClass("selected");
        $('#item-2-squad-hats').removeClass("old-selected");
        $('#item-2-squad-hats').children(".item-arrow-grey").hide();
        $('#item-2-squad-hats').children(".item-arrow").hide();
        $('#item-2-squad-hats').siblings().removeClass("old-selected");
        $('#item-2-squad-hats').siblings().children(".item-arrow-grey").hide();
    });
  
    /* squad hoodie */
  
    $('#item-2-squad-hoodie').click(function(){
        $('.column-3-holder').show();
        $('.folder-squad-hoodie').show();
        $('.folder-squad-hoodie').siblings().hide();
        $('.folder-squad-hoodie').children().removeClass("old-selected");
        $('.folder-squad-hoodie').children().removeClass("selected");
        $('#item-2-squad-hoodie').removeClass("old-selected");
        $('#item-2-squad-hoodie').children(".item-arrow-grey").hide();
        $('#item-2-squad-hoodie').children(".item-arrow").hide();
        $('#item-2-squad-hoodie').siblings().removeClass("old-selected");
        $('#item-2-squad-hoodie').siblings().children(".item-arrow-grey").hide();
    });
  
    /* gang hoodie */
  
    $('#item-2-gang-hoodie').click(function(){
        $('.column-3-holder').show();
        $('.folder-gang-hoodie').show();
        $('.folder-gang-hoodie').siblings().hide();
        $('.folder-gang-hoodie').children().removeClass("old-selected");
        $('.folder-gang-hoodie').children().removeClass("selected");
        $('#item-2-gang-hoodie').removeClass("old-selected");
        $('#item-2-gang-hoodie').children(".item-arrow-grey").hide();
        $('#item-2-gang-hoodie').children(".item-arrow").hide();
        $('#item-2-gang-hoodie').siblings().removeClass("old-selected");
        $('#item-2-gang-hoodie').siblings().children(".item-arrow-grey").hide();
    });
  
    /* harambe hoodie */
  
    $('#item-2-harambe-hoodie').click(function(){
        $('.column-3-holder').show();
        $('.folder-harambe-hoodie').show();
        $('.folder-harambe-hoodie').siblings().hide();
        $('.folder-harambe-hoodie').children().removeClass("old-selected");
        $('.folder-harambe-hoodie').children().removeClass("selected");
        $('#item-2-harambe-hoodie').removeClass("old-selected");
        $('#item-2-harambe-hoodie').children(".item-arrow-grey").hide();
        $('#item-2-harambe-hoodie').children(".item-arrow").hide();
        $('#item-2-harambe-hoodie').siblings().removeClass("old-selected");
        $('#item-2-harambe-hoodie').siblings().children(".item-arrow-grey").hide();
    });
  
    /* press */
  
    var container = $('.folder-press');
    container.click(function(){
      $('#item-1-press').removeClass("selected");
      $('#item-1-press').addClass("old-selected");
      $('#item-1-press').children(".item-arrow-blue").hide();
      $('#item-1-press').children(".item-arrow").hide();
      $('#item-1-press').children(".item-arrow-grey").show();
    });
  
    $('#item-2-press-1').dblclick(function() {
        window.open('http://time.com/3678716/celebrity-emoji-portraits/');
    });
  
    $('#item-2-press-2').dblclick(function() {
        window.open('http://thecreatorsproject.vice.com/blog/interactive-cgi-music-video-vince-staples');
    });
  
    $('#item-2-press-3').dblclick(function() {
        window.open('http://pitchfork.com/news/63726-santigolds-interactive-cant-get-enough-of-myself-video-features-your-face/');
    });
  
    $('#item-2-press-4').dblclick(function() {
        window.open('http://www.theverge.com/2016/2/24/11105278/santigold-new-video-cant-get-enough-of-myself-99-cents');
    });
  
    $('#item-2-press-5').dblclick(function() {
        window.open('https://hypebeast.com/2016/4/with-you-vince-staples-ghost-video');
    });
  
    $('#item-2-press-6').dblclick(function() {
        window.open('http://www.thefader.com/artist/yung-jake');
    });
  
    $('#item-2-press-7').dblclick(function() {
        window.open('http://www.billboard.com/articles/columns/hip-hop/7271655/jay-z-pharrell-andy-samberg-santigold-cant-get-enough-of-myself-video');
    });
  
    $('#item-2-press-8').dblclick(function() {
        window.open('http://www.illroots.com/search/yung%20jake');
    });
    $('#item-2-press-9').dblclick(function() {
        window.open('http://www.complex.com/style/2015/06/yung-jake-new-identity-june-july-2015');
    });
  
    $('#item-2-press-10').dblclick(function() {
        window.open('http://www.sundance.org/blogs/yung-jake-leading-a-net-native-generation-of-storytellers');
    });
  
    $('#item-2-press-11').dblclick(function() {
        window.open('http://blog.giphy.com/post/56970599397/artist-spotlight-vince-mckelvie-when-did-you');
    });
  
    /* awards */
  
    var container = $('.folder-awards');
    container.click(function(){
      $('#item-1-awards').removeClass("selected");
      $('#item-1-awards').addClass("old-selected");
      $('#item-1-awards').children(".item-arrow-blue").hide();
      $('#item-1-awards').children(".item-arrow").hide();
      $('#item-1-awards').children(".item-arrow-grey").show();
    });
  
    $('#item-2-awards-1').dblclick(function() {
        window.open('https://thefwa.com/cases/yung-jake-both');
    });
  
    $('#item-2-awards-2').dblclick(function() {
        window.open('http://webbyawards.com/winners/2016/social/social-content-and-marketing/experimental-innovation/yung-jake-both-feat-charlie-heat/');
    });
  
    $('#item-2-awards-3').dblclick(function() {
        window.open('http://shortyawards.com/8th/yungjake');
    });
  
    $('#item-2-awards-4').dblclick(function() {
        window.open('http://imdb.com/name/nm5563957/awards?ref_=m_nm_awd');
    });
  
    $('#item-2-awards-5').dblclick(function() {
        window.open('http://imdb.com/name/nm5563957/awards?ref_=m_nm_awd');
    });
  
    $('#item-2-awards-6').dblclick(function() {
        window.open('http://www.austinmusicvideofestival.com/winners/');
    });
  
    /* column-3 */
  
    $('.column-3').click(function(){
        $('.column-2-holder').show();
        $('.column-3-holder').show();
    });
  
    /* projects */
  
    /* videos */
  
    var container = $('.folder-videos');
    container.click(function(){
      $('.folder-projects').show();
      $('#item-2-videos').removeClass("selected");
      $('#item-2-videos').addClass("old-selected");
      $('#item-2-videos').children(".item-arrow-blue").hide();
      $('#item-2-videos').children(".item-arrow").hide();
      $('#item-2-videos').children(".item-arrow-grey").show();
      $('#item-1-projects').addClass("old-selected");
      $('#item-1-projects').children(".item-arrow-blue").hide();
      $('#item-1-projects').children(".item-arrow").hide();
      $('#item-1-projects').children(".item-arrow-grey").show();
    });

    $('#c1').dblclick(function() {
        window.open('https://github.com/shyampatell17/Dean-s-List');
    });
    $('#c2').dblclick(function() {
        window.open('https://github.com/shyampatell17/Dean-s-List');
    });

    $('#item-3-offtop').dblclick(function() {
        //window.open('https://www.youtube.com/watch?v=MWWoADvRe4s');
        openNewWindow(560,315,"Beer Jimmy - Offtop","https://www.youtube.com/embed/MWWoADvRe4s", "#item-3-offtop");
    });
  
    $('#item-3-vince').dblclick(function() {
        //window.open('http://ghost.wyfyby.com/');
        openNewWindow(560,315,"Vince Staples - Ghost","http://ghost.wyfyby.com/","#item-3-vince");
    });
  
    $('#item-3-santigold').dblclick(function() {
        window.open('https://cantgetenoughofmyself.webcam/');
    });
  
    $('#item-3-pepsi').dblclick(function() {
        window.open('https://vimeo.com/122654034');
    });
  
    $('#item-3-look').dblclick(function() {
        window.open('https://www.youtube.com/watch?v=va2TWYe5QDc');
    });
  
    $('#item-3-she').dblclick(function() {
        window.open('https://www.youtube.com/watch?v=P7WO0I3qKzw');
    });
  
    $('#item-3-flex').dblclick(function() {
        window.open('https://www.youtube.com/watch?v=p2cQSPRTdhg');
    });
  
    $('#item-3-aug').dblclick(function() {
        window.open('http://real.yungjake.com/');
    });
  
    $('#item-3-embeded').dblclick(function() {
        window.open('http://e.m-bed.de/d/');
    });
  
    $('#item-3-datamosh').dblclick(function() {
        window.open('https://www.youtube.com/watch?v=nS7QvOX8LVk');
    });
  
    $('#item-3-both').dblclick(function() {
        window.open('https://www.youtube.com/watch?v=p7EpbiSCCEc');
    });
  
    $('#item-3-idr').dblclick(function() {
        window.open('https://www.youtube.com/watch?v=EbZoxfrJydo');
    });
  
  
    /* websites */
  
    var container = $('.folder-websites');
    container.click(function(){
      $('.folder-projects').show();
      $('#item-2-websites').removeClass("selected");
      $('#item-2-websites').addClass("old-selected");
      $('#item-2-websites').children(".item-arrow-blue").hide();
      $('#item-2-websites').children(".item-arrow").hide();
      $('#item-2-websites').children(".item-arrow-grey").show();
      $('#item-1-projects').addClass("old-selected");
      $('#item-1-projects').children(".item-arrow-blue").hide();
      $('#item-1-projects').children(".item-arrow").hide();
      $('#item-1-projects').children(".item-arrow-grey").show();
    });
  
    $('#proj-1').dblclick(function() {
        window.open('https://shyampatell17.github.io/LoFi-Study-Web/');
    });
  
    $('#proj-2').dblclick(function() {
        window.open('https://shyampatell17.github.io/FileDonutt/');
    });
  
    $('#item-3-gf').dblclick(function() {
        window.open('http://gradientforest.com/');
    });
  
    $('#item-3-honey').dblclick(function() {
        window.open('http://hhhoneyyy.net/');
    });
  
    $('#item-3-cr').dblclick(function() {
        window.open('http://builder.clubrothko.com/');
    });
  
    $('#item-3-klear').dblclick(function() {
        window.open('http://klear.me/');
    });
  
    $('#item-3-ep').dblclick(function() {
        window.open('http://electricalpulse.net/');
    });
  
    $('#item-3-lasso').dblclick(function() {
        window.open('http://lasso.ink/');
    });
  
    $('#item-3-rr').dblclick(function() {
        window.open('https://vincemckelvie.com/rendered/realtime/');
    });
  
    $('#item-3-hag').dblclick(function() {
        window.open('http://vincemckelvie.tumblr.com/hag');
    });
  
    $('#item-3-oc').dblclick(function() {
        window.open('http://orthographic.camera/');
    });
  
    /* creative direction */
  
    var container = $('.folder-creative-direction');
    container.click(function(){
      $('.folder-projects').show();
      $('#item-2-creative-direction').removeClass("selected");
      $('#item-2-creative-direction').addClass("old-selected");
      $('#item-2-creative-direction').children(".item-arrow-blue").hide();
      $('#item-2-creative-direction').children(".item-arrow").hide();
      $('#item-2-creative-direction').children(".item-arrow-grey").show();
      $('#item-1-projects').addClass("old-selected");
      $('#item-1-projects').children(".item-arrow-blue").hide();
      $('#item-1-projects').children(".item-arrow").hide();
      $('#item-1-projects').children(".item-arrow-grey").show();
    });
  
    $('#item-3-veryman').dblclick(function() {
        window.open('http://www.adultswim.com/etcetera/very-man/');
    });
  
    $('#item-3-penismap').dblclick(function() {
        window.open('http://www.adultswim.com/etcetera/pmgi/');
    });
  
    $('#item-3-azz').dblclick(function() {
        window.open('http://www.adultswim.com/etcetera/asazz/');
    });
  
    $('#item-3-pg1').dblclick(function() {
        window.open('http://www.adultswim.com/etcetera/pretty-gross/');
    });
  
    $('#item-3-pg2').dblclick(function() {
        window.open('http://www.adultswim.com/etcetera/pretty-gross-2/');
    });
  
    $('#item-3-ea').dblclick(function() {
        window.open('https://chrome.google.com/webstore/detail/eric-andre/ifnboedoofdmkfihhgagddionacnpdhb?hl=en-US/');
    });
  
    /* contact */
  
    /* yung jake */
  
    var container = $('.folder-jake');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-jake').removeClass("selected");
      $('#item-2-jake').addClass("old-selected");
      $('#item-2-jake').children(".item-arrow-blue").hide();
      $('#item-2-jake').children(".item-arrow").hide();
      $('#item-2-jake').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-yj-ig').dblclick(function() {
        window.open('https://www.instagram.com/shyam.patel17/');
    });
  
    $('#item-3-yj-twitter').dblclick(function() {
        window.open('https://twitter.com/ShyamPatell17');
    });

    $('#item-3-yj-ld').dblclick(function() {
        window.open('https://www.linkedin.com/in/shyam-patel-0575a4155/');
    });
  
    // $('#item-3-yj-facebook').dblclick(function() {
    //     window.open('https://www.facebook.com/yuungjaake/');
    // });
    //
    // $('#item-3-yj-youtube').dblclick(function() {
    //     window.open('https://www.youtube.com/user/jakebake135');
    // });
    //
    // $('#item-3-yj-mssngpeces').dblclick(function() {
    //     window.open('http://mssngpeces.com/directors/digital/yungjake/is-yung-jake-the-internets-artist/');
    // });
  
    /* vince mckelvie */
  
    var container = $('.folder-vince');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-vince').removeClass("selected");
      $('#item-2-vince').addClass("old-selected");
      $('#item-2-vince').children(".item-arrow-blue").hide();
      $('#item-2-vince').children(".item-arrow").hide();
      $('#item-2-vince').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-vince-site').dblclick(function() {
        window.open('https://vincemckelvie.com/');
    });
  
    $('#item-3-vince-ig').dblclick(function() {
        window.open('https://www.instagram.com/vincemckelvie/?hl=en');
    });
  
    $('#item-3-vince-mssngpeces').dblclick(function() {
        window.open('http://mssngpeces.com/directors/digital/vince-mckelvie/about-vince/');
    });
  
  
    /* theo bark */
  
    var container = $('.folder-theo');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-theo').removeClass("selected");
      $('#item-2-theo').addClass("old-selected");
      $('#item-2-theo').children(".item-arrow-blue").hide();
      $('#item-2-theo').children(".item-arrow").hide();
      $('#item-2-theo').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-theo-ig').dblclick(function() {
        window.open('https://www.instagram.com/wisekingt/?hl=en');
    });
  
    $('#item-3-theo-email').dblclick(function() {
        alert("email address copied to clipboard");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($("#email-address-theo-2").text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
  
    /* corey houck */
  
    var container = $('.folder-corey');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-corey').removeClass("selected");
      $('#item-2-corey').addClass("old-selected");
      $('#item-2-corey').children(".item-arrow-blue").hide();
      $('#item-2-corey').children(".item-arrow").hide();
      $('#item-2-corey').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-corey-site').dblclick(function() {
        window.open('http://coreyhouck.com');
    });
  
    $('#item-3-corey-ig').dblclick(function() {
        window.open('https://www.instagram.com/coreyhouck/');
    });
  
    $('#item-3-corey-email').dblclick(function() {
        alert("email address copied to clipboard");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($("#email-address-corey").text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
  
    /* shop */
  
    /* money phone */
  
    $('#item-2-money-phone').click(function(){
      // $(".column-3-holder").width(200);
      // $(".column-3").width(200);
      $(".content-area").scrollLeft(400);
    });
  
    $('#item-2-money-phone, #item-3-money-phone').dblclick(function(){
      var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
          $('#window-2').css('left', positionX);
      var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2;
          $('#window-2').css('top', positionY);
      $('#window-2').show();
    });
  
    $('#item-3-money-phone').click(function(){
      $(this).removeClass('selected');
      $('#item-2-money-phone').addClass("selected");
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children('.item-arrow-grey').show();
      $('#item-1-shop').children('.item-arrow').hide();
      $('.folder-shop').show();
    });
  
    /* usb mixtape */
  
    $('#item-2-usb').click(function(){
      // $(".column-3-holder").width(200);
      // $(".column-3").width(200);
      $(".content-area").scrollLeft(480);
    });
  
    $('#item-2-usb, #item-3-sub').dblclick(function(){
      var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
      $('#window-2').css('left', positionX);
      var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2;
      $('#window-2').css('top', positionY);
      $('#window-2').show();
    });
  
  
    $('#item-3-usb').click(function(){
      $(this).removeClass('selected');
      $('#item-2-usb').addClass("selected");
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children('.item-arrow-grey').show();
      $('#item-1-shop').children('.item-arrow').hide();
      $('.folder-shop').show();
      $('.folder-shop').show();
    });
  
  
    /* squad hats */
  
    var container = $('.folder-squad-hats');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-squad-hats').removeClass("selected");
      $('#item-2-squad-hats').addClass("old-selected");
      $('#item-2-squad-hats').children(".item-arrow-blue").hide();
      $('#item-2-squad-hats').children(".item-arrow").hide();
      $('#item-2-squad-hats').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
      $(".content-area").scrollLeft(480);
    });
  
    $('#item-3-hat-black, #item-4-hat-black').click(function(){
      //$('.column-4, .column-4-holder').css("width", "200px");
      //$('.column-4-holder').css("right", "-200px");
      $(".content-area").scrollLeft(400);
    });
  
    $('#item-3-hat-black, #item-4-hat-black').dblclick(function(){
      var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
      $('#window-3').css('left', positionX);
      var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2;
      $('#window-3').css('top', positionY);
      $('#window-3').show();
    });
  
    // $(document).mouseup(function (e){
    //   var container = $("#item-3-hat-black");
    //   if (!container.is(e.target) && container.has(e.target).length === 0){
    //     $('.column-4, .column-4-holder').css("width", "150px");
    //     $('.column-4-holder').css("right", "-150px");
    //   }
    // });
  
    /* squad hoodies */
  
    var container = $('.folder-squad-hoodie');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-squad-hoodie').removeClass("selected");
      $('#item-2-squad-hoodie').addClass("old-selected");
      $('#item-2-squad-hoodie').children(".item-arrow-blue").hide();
      $('#item-2-squad-hoodie').children(".item-arrow").hide();
      $('#item-2-squad-hoodie').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
      $(".content-area").scrollLeft(480);
    });
  
    /* gang hoodies */
  
    var container = $('.folder-gang-hoodie');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-gang-hoodie').removeClass("selected");
      $('#item-2-gang-hoodie').addClass("old-selected");
      $('#item-2-gang-hoodie').children(".item-arrow-blue").hide();
      $('#item-2-gang-hoodie').children(".item-arrow").hide();
      $('#item-2-gang-hoodie').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
      $(".content-area").scrollLeft(480);
    });
  
    /* harambe hoodies */
  
    var container = $('.folder-harambe-hoodie');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-harambe-hoodie').removeClass("selected");
      $('#item-2-harambe-hoodie').addClass("old-selected");
      $('#item-2-harambe-hoodie').children(".item-arrow-blue").hide();
      $('#item-2-harambe-hoodie').children(".item-arrow").hide();
      $('#item-2-harambe-hoodie').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
      $(".content-area").scrollLeft(480);
    });
  
  });
  
  function openNewWindow(sizeX, sizeY, title, src, id){
    $('#window-3 .title').html(title);
    $('#window-3 .title-icon').attr("src",$(id + " .item-icon-normal").attr("src"));
    $('#window-3 .window-content').attr("src", src);
    var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
    $('#window-3').css('left', positionX);
    var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2 + 20;
    $('#window-3').css('top', positionY);
    $('#window-3').width(sizeX);
    $('#window-3').height(sizeY);
    $('#window-3').show();
    $('#window-3').click();
  }
  
  function openNewShopWindow(sizeX, sizeY, title, src, id){
    $('#window-2 .title').html(title);
    $('#window-2 .title-icon').attr("src",$(id + " .item-icon-normal").attr("src"));
    $('#window-2 .window-content').attr("src", src);
    var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
    $('#window-2').css('left', positionX);
    var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2 + 20;
    $('#window-2').css('top', positionY);
    $('#window-2').width(sizeX);
    $('#window-2').height(sizeY);
    $('#window-2').show();
    $('#window-2').click();
  }
  
  