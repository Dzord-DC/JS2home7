Vue.component('filters', {

    template: `
    
    <form action="#" class="search_form" @submit.prevent="$root.filter">
                            <input class="search_input" type="text"  v-model="$root.userSearch" @input="$root.filter" placeholder="Search for Item...">
                            <button class="search_button" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
    </form>
    `
});
/*<form action="#" class="search-form" @submit.prevent="$root.filter">
        <input type="text" class="search-field" v-model="$root.userSearch" @input="$root.filter">
        <button type="submit" class="btn-search">
        <i class="fas fa-search"></i>
        </button>
    </form>*/