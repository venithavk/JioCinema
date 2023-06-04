const Test_BasePage = require('../Pages/test_Base_Page');
const basePage = new Test_BasePage();
const { assert } = require('chai');
const json = require('../Config/test_Property.json');
const audio = json.vodChangeAudio;
const video = json.vodChangeVideo;

let language,quality ;

describe('Scenario 2 : To Change Language or Quality in Live/VOD', function () {
  // this line is required for report generation 
  this.timeout(40000);

  it('Playing the VOD', async function () {

    await basePage.test_ClickLinkText(audio.vod);
    console.log("VOD is Playing");
    await basePage.test_Wait(audio.hideAd);    
  });

  it('Changing Audio to Another Language', async function () {
      await basePage.test_ClickByXpath(audio.selectGroup);
      await basePage.test_ClickByXpath(audio.selectAudio);
      language = await basePage.test_GetXpathText(audio.selectAudio);
      console.log(`Audio Changed from Default to English : ${language}`);
  });

  it('Verifying Audio Changed to Another Language', async function () {
      assert.strictEqual(language, audio.changed); 

  });

  it('Changing Video from Auto to HD Resolution', async function () { 
    
      await basePage.test_ClickByXpath(video.selectPanel); 
      await basePage.test_ClickByXpath(video.selectQuality);
      quality = await basePage.test_GetXpathText(video.selectQuality);
      console.log(`Video Resolution Changed from Auto to ${quality}`);     
    
   });
 
   it('Verify Whether Resolution is Changed or not', async function () {
     assert.strictEqual(quality, video.resolution);    
   });  
   
});