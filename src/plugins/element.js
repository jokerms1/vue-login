import Vue from "vue";

import {
  Scrollbar,
  DatePicker,
  Tooltip,
  Select,
  Option,
  OptionGroup,
  Table,
  TableColumn,
  Pagination,
  ColorPicker,
  Loading,
  Progress
} from "element-ui";

const element = {
  install: function(Vue) {
    Vue.use(Scrollbar);
    Vue.use(DatePicker);
    Vue.use(Tooltip);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(OptionGroup);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Pagination);
    Vue.use(ColorPicker);
    Vue.use(Progress);
    Vue.use(Loading.directive);
  }
};

Vue.prototype.$ELEMENT = {
  size: "small"
};

export default element;
