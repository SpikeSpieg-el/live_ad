vkBridge.send("VKWebAppInit", {})
        .then(() => {
            console.log('VK Bridge инициализирован');
    })
    .catch((error) => {
        console.error('Ошибка инициализации VK Bridge:', error);
});

    vkBridge.send('VKWebAppShowBannerAd', {
        banner_location: 'top'
        })
       .then((data) => { 
          if (data.result) {
            // Баннерная реклама отобразилась
          }
        })
        .catch((error) => {
          // Ошибка
          console.log(error);
        });