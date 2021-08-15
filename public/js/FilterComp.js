Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="search_form" @submit.prevent="$root.filter">
                                    <input class="search_input" type="text"  v-model="userSearch" @input="$root.filter" placeholder="Search for Item...">
                                    <button class="search_button" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
            </form>
            `
})