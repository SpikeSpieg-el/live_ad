vkBridge.send("VKWebAppInit", {})
    .then(() => {
        console.log('VK Bridge инициализирован');

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
        }, 1500); // 15000 мс = 15 секунд

    })
    .catch((error) => {
        console.error('Ошибка инициализации VK Bridge:', error);
    });
