vkBridge.send("VKWebAppInit", {})
    .then(() => {
        console.log('VK Bridge инициализирован');

        // Отображение баннера сверху
        vkBridge.send('VKWebAppShowBannerAd', {
            banner_location: 'top'
        })
        .then((data) => { 
            if (data.result) {
                console.log('Баннерная реклама отобразилась сверху');
            }
        })
        .catch((error) => {
            console.log('Ошибка отображения баннера сверху:', error);
        });

        // Отображение баннера снизу
        vkBridge.send('VKWebAppShowBannerAd', {
            banner_location: 'bottom'
        })
        .then((data) => { 
            if (data.result) {
                console.log('Баннерная реклама отобразилась снизу');
            }
        })
        .catch((error) => {
            console.log('Ошибка отображения баннера снизу:', error);
        });

        // Отображение баннера слева
        vkBridge.send('VKWebAppShowBannerAd', {
            banner_location: 'left'
        })
        .then((data) => { 
            if (data.result) {
                console.log('Баннерная реклама отобразилась слева');
            }
        })
        .catch((error) => {
            console.log('Ошибка отображения баннера слева:', error);
        });

        // Отображение баннера справа
        vkBridge.send('VKWebAppShowBannerAd', {
            banner_location: 'right'
        })
        .then((data) => { 
            if (data.result) {
                console.log('Баннерная реклама отобразилась справа');
            }
        })
        .catch((error) => {
            console.log('Ошибка отображения баннера справа:', error);
        });

        // Устанавливаем таймер на 15 секунд
        setTimeout(() => {
            // Проверка готовности рекламы
            vkBridge.send('VKWebAppCheckNativeAds', { ad_format: 'reward' })
                .then((data) => {
                    if (data.result) {
                        // Реклама готова, показываем ее
                        vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
                            .then((data) => {
                                if (data.result) {
                                    console.log('Реклама показана');
                                    // Обновляем страницу после показа рекламы
                                    location.reload();
                                } else {
                                    console.log('Ошибка при показе рекламы');
                                }
                            })
                            .catch((error) => {
                                console.log('Ошибка при показе рекламы:', error);
                            });
                    } else {
                        console.log('Рекламные материалы не найдены.');
                    }
                })
                .catch((error) => {
                    console.log('Ошибка при проверке готовности рекламы:', error);
                });
        }, 15000); // 15000 мс = 15 секунд

    })
    .catch((error) => {
        console.error('Ошибка инициализации VK Bridge:', error);
    });
