//建立元件與匯出元件
export default {
  //把上層元件page的資料傳入到下層元件 pages使用props
  props: ["pages", "getProducts"],
  //貼上bootstrap分頁版型
  template: `<nav aria-label="Page navigation example">
  <ul class="pagination">

    <li class="page-item" :class="{ disabled: !pages.has_pre }">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts(pages.current_page - 1)">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

    <li class="page-item" v-for="page in pages.total_pages" :key="page + 'page'" :class="{ active: page ===  pages.current_page }">
      <a class="page-link" href="#"    
      @click.prevent="$emit('change-page', page)">{{ page }}</a>
    </li>

    <li class="page-item" :class="{ disabled: !pages.has_next }">
      <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pages.current_page + 1)">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`,
};
