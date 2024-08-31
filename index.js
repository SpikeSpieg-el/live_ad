vkBridge.send('VKWebAppShowNativeAds', {
  ad_format: 'interstitial'
})
.then((data) => { 
  if (data.result) {
      // Реклама была показана
  } else {
      console.log('Реклама не была показана');
  }
})
.catch((error) => { 
  if (error.error_data && error.error_data.error_code === 20) {
      console.log('Нет доступной рекламы: ' + error.error_data.error_reason);
  } else {
      console.log('Произошла ошибка: ', error);
  }
});
