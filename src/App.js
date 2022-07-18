import logo from './favicon.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
    <p>I know this is very ugly and I'm working on it. </p>
    <p><code>Stay tuned!</code></p>
        
    <a
          className="github-link"
          href="https://github.com/tfulanchan/oilsystem/edit/master/src/App.js"
          target="_blank"
          rel="noopener noreferrer"
        >
    <img src={logo} className="App-logo" alt="logo" />
    </a>
        <a
          className="App-link"
          href="Chan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to learn about me
        </a>


          <h1>这是1号标题</h1>
          <font size="6">这是6号字体文本</font>

          <h2>这是2号标题</h2>
          <font size="5">这是5号字体文本</font>

          <h3>这是3号标题</h3>
          <font size="4">这是4号字体文本</font>

          <h4>这是4号标题</h4>
          <font size="3">这是3号字体文本</font>

          <h5>这是5号标题</h5>
          <font size="2">这是2号字体文本</font>

          <h6>这是6号标题</h6>
          <font size="1">这是1号字体文本</font>

      </header>
    </div> 
  );
}
export default App;


 function initSocialShare(button) {
    button.addEventListener('click', function(event){
      event.preventDefault();
      var social = button.getAttribute('data-social');
      var url = getSocialUrl(button, social);
      (social == 'mail')
        ? window.location.href = url
        : window.open(url, social+'-share-dialog', 'width=626,height=436');
    });
  };

  function getSocialUrl(button, social) {
    var params = getSocialParams(social);
    var newUrl = '';
    for(var i = 0; i < params.length; i++) {
      var paramValue = button.getAttribute('data-'+params[i]);
      if(params[i] == 'hashtags') paramValue = encodeURI(paramValue.replace(/\#| /g, ''));
      if(paramValue) {
        (social == 'facebook') 
          ? newUrl = newUrl + 'u='+encodeURIComponent(paramValue)+'&'
          : newUrl = newUrl + params[i]+'='+encodeURIComponent(paramValue)+'&';
      }
    }
    if(social == 'linkedin') newUrl = 'mini=true&'+newUrl;
    return button.getAttribute('href')+'?'+newUrl;
  };

  function getSocialParams(social) {
    var params = [];
    switch (social) {
      case 'twitter':
        params = ['text', 'hashtags'];
        break;
      case 'facebook':
      case 'linkedin':
        params = ['url'];
        break;
      case 'pinterest':
        params = ['url', 'media', 'description'];
        break;
      case 'mail':
        params = ['subject', 'body'];
        break;
    }
    return params;
  };

  var socialShare = document.getElementsByClassName('js-social-share');
  if(socialShare.length > 0) {
    for( var i = 0; i < socialShare.length; i++) {
      (function(i){initSocialShare(socialShare[i])})(i);
    }
  }
