vkBridge.send("VKWebAppInit", {})
    .then(() => {
        console.log('VK Bridge инициализирован');
    })
    .catch((error) => {
        console.error('Ошибка инициализации VK Bridge:', error);
    });
    vkBridge.send('VKWebAppShowNativeAds', {
        ad_format: 'interstitial' /* Тип рекламы */
        })
        .then( (data) => { 
          if (data.result) {
            // Реклама была показана
          } else {
            // Ошибка
          }
        })
        .catch((error) => { console.log(error); });

        vkBridge.send('VKWebAppShowBannerAd', {
            banner_location: 'bottom'
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