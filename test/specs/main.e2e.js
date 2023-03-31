describe('Main page', () => {
    it('Verify list item', async () => {
        browser.url('/')

        const listExample =await $$('//ul/li')

        await expect(listExample).toBeElementsArrayOfSize(44)
    })
})