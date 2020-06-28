<template>
  <div
    class="el-tree-node"
    @click.stop="handleClick"
    @contextmenu="($event) => this.handleContextMenu($event)"
    v-show="node.visible"
    :class="{
      'is-expanded': expanded,
      'is-current': node.isCurrent,
      'is-hidden': !node.visible,
      'is-focusable': !node.disabled,
      'is-checked': !node.disabled && node.checked
    }"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="node.disabled"
    :aria-checked="node.checked"
    :draggable="tree.draggable"
    @dragstart.stop="handleDragStart"
    @dragover.stop="handleDragOver"
    @dragend.stop="handleDragEnd"
    @drop.stop="handleDrop"
    ref="node"
  >
    <!-- <div class="line2" v-if="node.level !== 1" :style="{ 'padding-left': (node.level - 2) * tree.indent/2 + 'px'}"></div> -->
    <!-- <div class="el-tree-node__content" :style="{ 'padding-left': (node.level - 1) * tree.indent/2 + 'px'}">
      <div class="fe-flex-column">
        <div class="line" v-if="node.level !== 1"></div>    
        <div class="fe-align-center">
          <img v-if="expanded && !node.isLeaf" src="./550.png" :style="{ 'margin-left': (node.level > 1) * -4  + 'px'}"  @click.stop="handleExpandIconClick" class="expand-icon" />
          <img v-if="!expanded && !node.isLeaf" src="./560.png" :style="{ 'margin-left': (node.level > 1) * -4  + 'px'}" @click.stop="handleExpandIconClick" class="expand-icon" />
          <div class="line2" v-if="node.level !== 1"></div>
          <el-checkbox
            v-if="showCheckbox"
            v-model="node.checked"
            :indeterminate="node.indeterminate"
            :disabled="!!node.disabled"
            @click.native.stop
            @change="handleCheckChange"
          ></el-checkbox>
          <span v-if="node.loading" class="el-tree-node__loading-icon el-icon-loading"></span>
          <node-content :node="node" style="margin-left: 4px"></node-content>
        </div>
      </div>
    </div>
    <el-collapse-transition>
      <div class="el-tree-node__children" v-if="!renderAfterExpand || childNodeRendered" v-show="expanded" role="group" :aria-expanded="expanded">
        <wcp-tree-node
          :render-content="renderContent"
          v-for="child in node.childNodes"
          :render-after-expand="renderAfterExpand"
          :show-checkbox="showCheckbox"
          :key="getNodeKey(child)"
          :node="child"
          @node-expand="handleChildNodeExpand"
        ></wcp-tree-node>
      </div>
    </el-collapse-transition> -->
    <div class="fe-flex-column" :class="[ {'expand-border': flag(node)} ]" :style="{ 'margin-left':  tree.indent/2 + 'px'}">
      <div class="expand-flex-column">
        <div class="line" v-if="node.level !== 1 && !flag(node)"></div>  
        <div class="fe-align-center">
          <img v-show="expanded && !node.isLeaf" src="./550.png"  @click.stop="handleExpandIconClick" class="expand-icon" />
          <img v-show="!expanded && !node.isLeaf" src="./560.png" @click.stop="handleExpandIconClick" class="expand-icon" />
          <div class="line2"></div>
          <el-checkbox
            v-if="showCheckbox"
            v-model="node.checked"
            :indeterminate="node.indeterminate"
            :disabled="!!node.disabled"
            @click.native.stop
            @change="handleCheckChange"
          ></el-checkbox>
          <span v-if="node.loading" class="el-tree-node__loading-icon el-icon-loading"></span>
          <node-content :node="node" style="margin-left: 4px"></node-content>
        </div>
      </div>
      <el-collapse-transition>
        <div class="el-tree-node__children" v-if="!renderAfterExpand || childNodeRendered" v-show="expanded" role="group" :aria-expanded="expanded">
          <wcp-tree-node
            :render-content="renderContent"
            v-for="child in node.childNodes"
            :render-after-expand="renderAfterExpand"
            :show-checkbox="showCheckbox"
            :key="getNodeKey(child)"
            :node="child"
            @node-expand="handleChildNodeExpand"
          ></wcp-tree-node>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script type="text/jsx">
import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
import ElCheckbox from 'element-ui/packages/checkbox';
import emitter from 'element-ui/src/mixins/emitter';
import { getNodeKey } from './model/util';

export default {
  name: 'WcpTreeNode',

  componentName: 'WcpTreeNode',

  mixins: [emitter],

  props: {
    node: {
      default () {
        return {};
      }
    },
    props: {},
    renderContent: Function,
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },

  components: {
    ElCollapseTransition,
    ElCheckbox,
    NodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render (h) {
        const parent = this.$parent;
        const tree = parent.tree;
        const node = this.node;
        const { data, store } = node;
        return (
          parent.renderContent
            ? parent.renderContent.call(parent._renderProxy, h, { _self: tree.$vnode.context, node, data, store })
            : tree.$scopedSlots.default
              ? tree.$scopedSlots.default({ node, data })
              : <span class="el-tree-node__label"> <img src='' /> {node.label}</span>
        );
      }
    }
  },

  data () {
    return {
      tree: null,
      expanded: false,
      childNodeRendered: false,
      oldChecked: null,
      oldIndeterminate: null
    };
  },

  watch: {
    'node.indeterminate' (val) {
      this.handleSelectChange(this.node.checked, val);
    },

    'node.checked' (val) {
      this.handleSelectChange(val, this.node.indeterminate);
    },

    'node.expanded' (val) {
      this.$nextTick(() => this.expanded = val);
      if (val) {
        this.childNodeRendered = true;
      }
    }
  },

  methods: {
    flag (node) {
      console.log(node.parent)
      if (node.parent.childNodes.length === 0) {
        return false
      }
      return node.parent.childNodes.indexOf(node) !== node.parent.childNodes.length - 1
    }, 
    getNodeKey (node) {
      return getNodeKey(this.tree.nodeKey, node.data);
    },

    handleSelectChange (checked, indeterminate) {
      if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
        this.tree.$emit('check-change', this.node.data, checked, indeterminate);
      }
      this.oldChecked = checked;
      this.indeterminate = indeterminate;
    },

    handleClick () {
      const store = this.tree.store;
      store.setCurrentNode(this.node);
      this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
      this.tree.currentNode = this;
      if (this.tree.expandOnClickNode) {
        this.handleExpandIconClick();
      }
      if (this.tree.checkOnClickNode && !this.node.disabled) {
        this.handleCheckChange(null, {
          target: { checked: !this.node.checked }
        });
      }
      this.tree.$emit('node-click', this.node.data, this.node, this);
    },

    handleContextMenu (event) {
      if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
    },

    handleExpandIconClick () {
      if (this.node.isLeaf) return;
      if (this.expanded) {
        this.tree.$emit('node-collapse', this.node.data, this.node, this);
        this.node.collapse();
      } else {
        this.node.expand();
        this.$emit('node-expand', this.node.data, this.node, this);
      }
    },

    handleCheckChange (value, ev) {
      this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
      this.$nextTick(() => {
        const store = this.tree.store;
        this.tree.$emit('check', this.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys(),
        });
      });
    },

    handleChildNodeExpand (nodeData, node, instance) {
      this.broadcast('ElTreeNode', 'tree-node-expand', node);
      this.tree.$emit('node-expand', nodeData, node, instance);
    },

    handleDragStart (event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-start', event, this);
    },

    handleDragOver (event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-over', event, this);
      event.preventDefault();
    },

    handleDrop (event) {
      event.preventDefault();
    },

    handleDragEnd (event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-end', event, this);
    }
  },

  created () {
    const parent = this.$parent;

    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }

    const tree = this.tree;
    if (!tree) {
      console.warn('Can not find node\'s tree.');
    }

    const props = tree.props || {};
    const childrenKey = props['children'] || 'children';

    this.$watch(`node.data.${childrenKey}`, () => {
      this.node.updateChildren();
    });

    if (this.node.expanded) {
      this.expanded = true;
      this.childNodeRendered = true;
    }

    if (this.tree.accordion) {
      this.$on('tree-node-expand', node => {
        if (this.node !== node) {
          this.node.collapse();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.expand-flex-column {
  display: flex;
  flex-direction: column;
  height: 20px;
}
.expand-border {
  border-left:1px dotted #d2d2d2;
}
.expand-icon {
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-right: -5px;
}
.expand-flex {
  display: flex;
  flex-direction: row;
}
/deep/ .el-icon-caret-right:before {
  width: 20px;
  height: 20px;
}
/deep/ .el-tree-node__content {
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.line {
  height: 12px;
  width: 0px;
  // width: 10px;
  // background: url(./line_conn.gif) 0 0 repeat-y;
  border: 0.3px dotted #d2d2d2;
  margin-bottom: -8px;
  margin-top: -5px;
}
.line3 {
  height: 40px;
  width: 0px;
  // width: 10px;
  // background: url(./line_conn.gif) 0 0 repeat-y;
  border: 0.4px dotted #d2d2d2;
  // margin-bottom: -8px;
  // margin-top: -5px;
  // margin-top: -30px;
  margin-top: -15px;
}
.line2 {
  width: 15px;
  height: 0.2px;
  border: 0.4px dotted #d2d2d2;
  margin-top: 2px;
  // background: url(./line_conn.gif) 0 0 repeat-x;
}
// /deep/ .el-icon-caret-right:before {
//   content: "\e6e0";
// }
</style>
