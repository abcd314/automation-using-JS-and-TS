const loginPage={
    signInWithGoogle:'button[class="google-btn"]',
      
}

const erpPage={
    menuIcon:'#app > div > div:nth-child(1) > div > header > div > button',
    imsBtn:'body > div.MuiDrawer-root.MuiDrawer-modal.sidebar > div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16 > div > div.w-350 > ul:nth-child(2) > a:nth-child(10) > div'
  
}
const emailPage={
    emailTxt:'input[type=email]',
    nextBtn:'#identifierNext > div > button'
}

const passwordPage={
    passwordTxt:'input[type="password"]',
    nextBtn:'#passwordNext',
    allowBtn:'#submit_approve_access'
}

const imsTab={
    employeeReferal:'#root > div > div > div > div.col-lg-3.col-md-3 > div > div > div > div > nav > ul > li:nth-child(1) > a',
    firstName:'input[name="name"]',
    emailId:'input[name="emailId"]',
    contactNo:'input[name="contactNo"]',
    noticePeriod:'input[name="noticePeriod"]',
    submitBtn:'button[type="submit"]',
    createReq:'#root > div > div > div > div.col-lg-3.col-md-3 > div > div > div > div > nav > ul > li:nth-child(3) > a'
}

const createReqPage={
    jobTitle:'input[name="jobTitle"]',
    position:'input[name="vacantPositions"]',
    expRequired:'input[name="minExperience"]',
    project:'select[name="branch"]',
    jobDesc:'select[name="jobDescription"]',
    priority:'select[name="priority"]',
    createBtn:'#Create_button_id',
    cancelBtn:'input[type="reset"]'

}
module.exports=loginPage,erpPage,passwordPage,emailPage,imsTab,createReqPage;