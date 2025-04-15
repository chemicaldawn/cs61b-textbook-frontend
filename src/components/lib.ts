export class SidebarGroup {

    chapter : string;

    primary : SidebarItem;
    secondary : SidebarItem[]

    constructor(chapter : string, primary : SidebarItem) {
        this.chapter = chapter;
        this.primary = primary;
        this.secondary = []
    }

    addItem(item : SidebarItem) : void {
        this.secondary.push(item)
    }
}

export class SidebarItem {

    chapter : string;
    section : string;
    title : string;
    slug : string;
    isChapter : boolean;
    startsActive : boolean;

    classList : string;
    url : string;
    pushUrl : string;
    pagemapUrl : string;

    constructor(chapter : string, section : string, title: string, slug : string, isChapter : boolean, startsActive : boolean) {
        this.chapter = chapter;
        this.section = section;
        this.title = title;
        this.slug = slug;
        this.isChapter = isChapter;
        this.startsActive = startsActive;

        this.classList = "sidebar-item"

        let baseUrl : string = `/${chapter}/${slug}`

        if (slug != "index") {
            this.pushUrl = `/${chapter}/${slug}`
        } else {
            this.pushUrl = '/'
        }

        this.url = "/partials" + baseUrl
        this.pagemapUrl = "/pagemap" + baseUrl
        

        if (!this.isChapter) {
            this.classList += " section"
        }
    }
}