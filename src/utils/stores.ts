import { reactive } from "vue";

export const hoverStore = reactive({
    isHome: false,
    setHomeTrue() {
        this.isHome = true;
    },
    setHomeFalse() {
        this.isHome = false;
    },
    currHover: "none",
    setCurr(val: string) {
        this.currHover = val; 
    }

})
