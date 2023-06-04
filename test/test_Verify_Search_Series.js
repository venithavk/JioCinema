const Test_BasePage = require('../Pages/test_Base_Page');
const basePage = new Test_BasePage();
const { assert } = require('chai');
const json = require('../Config/test_Property.json');
const property = json.verifySearchSeries;

let isSearch ;

describe('Scenario 1 : Searching for Series and Verifying from Suggestion', function () { 

  this.timeout(40000);

  it('Searching for Series', async function () {
    await basePage.test_SearchByText(property.idName,property.keyword);   
  });

  it('Selecting Series from Suggestion', async function () {
    await basePage.test_ClickByXpath(property.playSeries); 
  });

  it('Verifying Search Keyword with Series Title', async function () {
    isSearch = await basePage.test_GetXpathText(property.fetchTitle);
    
    assert.strictEqual(isSearch.toLowerCase(), property.keyword.toLowerCase());    
  });

  it('Verifying Watch Button', async function () {
    watchText = await basePage.test_GetLinkText(property.watch);
    assert.strictEqual(watchText, property.watch);
  });

  it('Verifying Episode List', async function () {
    element = await basePage.test_FindByCss(property.tag);
    episodeLists = await basePage.test_FindClassElements(element, property.class);
    assert.isArray(episodeLists);
    
  });

  // it('Verifying More Like This is Displaying or Not', async function () {
  //   moreLikeThis = await basePage.test_GetXpathText(property.isDisplayed);
  //   isText = moreLikeThis.toLowerCase();
  //   assert.strictEqual(isText, 'more like this');
  // });
 
});
