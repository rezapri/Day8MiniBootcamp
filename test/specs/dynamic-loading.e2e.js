describe ('Dynamic Loading Page', () => {
    it ('wait for the hidden element to show', async () => {
        const btnStart = $('#start button')
        const textFinish = $('#finish h4')
        const sedangLoading = $('#loading')

        await browser.url('/dynamic_loading/1')

        await btnStart.click()

        await sedangLoading.waitForDisplayed()

        await sedangLoading.waitForDisplayed({reverse: true})

        await expect(textFinish).toHaveTextContaining("Hello World!")
    })
})