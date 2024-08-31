vkBridge.send("VKWebAppInit", {})
    .then(() => {
        console.log('VK Bridge инициализирован');
        
        return vkBridge.send('VKWebAppShowNativeAds', {
            ad_format: 'interstitial' // Тип рекламы
        });
    })
    .then((data) => { 
        if (data.result) {
            // Реклама была показана
        } else {
            // Ошибка
        }
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });

// Показ баннерной рекламы
vkBridge.send('VKWebAppShowBannerAd', {
        banner_location: 'bottom'
    })
    .then((data) => { 
        if (data.result) {
            // Баннерная реклама отобразилась (внизу)
        }
    })
    .catch((error) => {
        console.error('Ошибка показа нижнего баннера:', error);
    });

vkBridge.send('VKWebAppShowBannerAd', {
        banner_location: 'top'
    })
    .then((data) => { 
        if (data.result) {
            // Баннерная реклама отобразилась (вверху)
        }
    })
    .catch((error) => {
        console.error('Ошибка показа верхнего баннера:', error);
    });
