/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */

class PageBlock {
    constructor(element) {
        this.element = element;
    }
    viewBlock() {
        return `I have just viewed ${this.element}`;
    }
}

class Page {
    constructor(baseUrl, path) {
        this.baseUrl = baseUrl;
        this.path = path;
    }

    viewBaseUrl() {
        return `My base URL = ${this.baseUrl}`;
    }

    get footer() {
        return new PageBlock('footer');
    }

    get header() {
        return new PageBlock('header');
    }

    open() {
        return `I have just navigated to ${this.baseUrl}${this.path}`;
    }
}

class UploadVideoPage extends Page {
    constructor(baseUrl, path) {
        super(baseUrl, path);
    }
    get fullVideoTitle() {
        return `Full Video Title field`;
    }
    get shortVideoTitle() {
        return `Short Video Title field`;
    }
    get descriptionField() {
        return 'Description field';
    }
    get tagsField() {
        return 'Tags field';
    }
  
    get uploadButton() {
        return `Upload button`;
    }
  
    typeFullVideoTitle(text) {
        return `I have just typed '${text}' into ${this.fullVideoTitle}`;
    }

    typeShortVideoTitle(text) {
        return `I have just typed '${text}' into ${this.shortVideoTitle}`;
    }

    typeDescriptionField(text) {
        return `I have just typed '${text}' into ${this.descriptionField}`;
    }
    typeTags(text){
        return `I have just typed '${text}' into ${this.tagsField}`;
    }

    clickUpload() {
        return `I have just clicked ${this.uploadButton}`;
    }
}
const uploadPage = new UploadVideoPage('www.youtube.com', '/upload');
console.log(uploadPage);
console.log(uploadPage.viewBaseUrl());
console.log(uploadPage.open());
console.log(uploadPage.footer.viewBlock());
console.log(uploadPage.header.viewBlock());
console.log(uploadPage.typeFullVideoTitle('JS Mentoring: 7) Classes and OOP'));
console.log(uploadPage.typeShortVideoTitle('Classes and OOP'));
console.log(uploadPage.typeDescriptionField('JS lecture on Classes and OOP'));
console.log(uploadPage.typeTags('javascript'));
console.log(uploadPage.clickUpload());


