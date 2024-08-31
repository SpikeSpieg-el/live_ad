vkBridge.send("VKWebAppInit", {})
    .then(() => {
        console.log('VK Bridge инициализирован');
        // Запуск показа рекламы через 15 секунд
        setTimeout(() => {
            vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
                .then((data) => { 
                    if (data.result) {
                        console.log('Реклама показана');
                        // Обновление страницы после показа рекламы
                        location.reload();
                    } else {
                        console.log('Ошибка при показе рекламы');
                    }
                })
                .catch((error) => {
                    console.log('Ошибка:', error);
                });
        }, 15000); // 15000 миллисекунд = 15 секунд
    })
    .catch((error) => {
        console.error('Ошибка инициализации VK Bridge:', error);
    });
