<template>
  <div class="container">
    <div class="left-board">
      <el-scrollbar class="left-scrollbar">
        <el-alert
          title="不可新增字段，如需新增，请重新定义表单模版"
          type="warning"
          :closable="false"
        >
        </el-alert>

        <!--左侧组件列表-->
        <div class="components-list">
          <div class="components-title"> 常用组件 </div>
          <draggable
            class="components-draggable"
            :list="formItems"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :clone="cloneComponent"
            draggable=".components-item"
            :sort="false"
            disabled="disabled"
          >
            <div
              v-for="(element, index) in formItems"
              :key="index"
              class="components-item"
            >
              <div
                class="components-body"
                :class="{ 'dynamicTable-tips': dynamicTableExist(element) }"
              >
                <icon :code="element.compIcon" :text="element.compName" />
              </div>
            </div>
          </draggable>
          <div class="components-title"> 布局组件 </div>
          <draggable
            class="components-draggable"
            :list="layoutFormItems"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :clone="cloneComponent"
            draggable=".components-item"
            :sort="false"
            disabled="disabled"
          >
            <div
              v-for="(element, index) in layoutFormItems"
              :key="index"
              class="components-item"

            >
              <div class="components-body">
                <icon :code="element.compIcon" :text="element.compName" />
              </div>
            </div>
          </draggable>
          <div class="components-title"> 辅助组件 </div>
          <draggable
            class="components-draggable"
            :list="assistFormItems"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            :clone="cloneComponent"
            draggable=".components-item"
            :sort="false"
            disabled="disabled"
          >
            <div
              v-for="(element, index) in assistFormItems"
              :key="index"
              class="components-item"
            >
              <div class="components-body">
                <icon :code="element.compIcon" :text="element.compName" />
              </div>
            </div>
          </draggable>
        </div>
      </el-scrollbar>
    </div>
    <designer-setting
      ref="designer"
      :list="designList"
      :formId="this.formId"
      :formConfig="formConfig"
      @clear="designList = []"
      @updateJSON="handlerUpdateJSON"
      :activeData="activeData"
    />
  </div>
</template>
<script>
/**
 * 1.0版本
 */
import draggable from 'vuedraggable';
import { formItems, assistFormItems, layoutFormItems } from './custom/itemList';
import icon from './icon';
import { getSimpleId } from './utils/IdGenerate';
import { dynamicTableAllowedItems } from './custom/formConf';
import DesignerSetting from "@/components/formcomponents/designerSetting";
let tempActiveData;

export default {
  name: 'formSetting',
  components: {
    DesignerSetting,
    draggable,
    icon
  },
  data() {
    return {
      formItems: formItems,
      assistFormItems: assistFormItems,
      layoutFormItems: layoutFormItems,
      designList: this.mapList,
      activeData: {},
      formConfig: this.formConf
    };
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    formConf: Object,
    mapList: Array,
    formId: String
  },
  mounted() {
    document.body.ondrop = function(event) {
      event.preventDefault();
      event.stopPropagation();
    };
  },
  methods: {
    saveMap() {
      return this.$refs.designer.saveMap();
    },
    addComponent(element) {},
    cloneComponent(origin) {
      const clone = JSON.parse(JSON.stringify(origin));
      if (!clone.layout) clone.layout = 'colItem';
      if (clone.layout === 'colItem' || clone.layout === 'dynamicItem') {
        let uId = 'fd_' + getSimpleId();
        clone.id = uId;
        clone._id = uId;
        tempActiveData = clone;
      } else if (clone.layout === 'rowItem') {
        let uId = 'row_' + getSimpleId();
        clone.id = uId;
        clone._id = uId;
        tempActiveData = clone;
      } else if (clone.layout === 'tableItem') {
        let uId = 'table_' + getSimpleId();
        clone.id = uId;
        clone._id = uId;
        tempActiveData = clone;
      }
      this.$refs.designer.activeItem = tempActiveData;
    },
    onStart(obj) {},
    onEnd(obj) {
      if (obj.from !== obj.to) {
        this.activeData = tempActiveData;
        this.$refs.designer.activeItem = this.activeData;
        if (obj.to.className.indexOf('row-drag') < 0) {
          this.designList.splice(obj.newIndex, 0, this.activeData);
        }
      } else {
        this.$refs.designer.activeItem = {};
      }
    },
    getFormData() {
      return this.formData;
    },
    handlerUpdateJSON(json) {
      const jsonObject = JSON.parse(json);
      this.designList = [];
      this.designList = this.designList.concat(jsonObject.list);
    }
  },
  computed: {
    formData: function () {
      const list = this.designList;
      const config = this.formConfig;
      let formData = {};
      formData.list = list;
      formData.config = config;
      console.log(formData);
      return JSON.stringify(formData);
      //this.$emit('input',JSON.stringify(formData));
    },
    dynamicTableExist() {
      return function (element) {
        return (
          this.formConfig.dynamicTableAllowed &&
          this.designList.filter((item) => item.compType === 'dynamicTable').length > 0 &&
          dynamicTableAllowedItems.includes(element.compType)
        );
      };
    }
  },
  watch: {
    value(newVal) {
      if (newVal !== '') {
        const formData = JSON.parse(newVal);
        this.designList = formData.list;
        this.formConfig = formData.config;
      }
    }
  }
};
</script>
<style scoped>
.container {
  padding: 0px;
}
.dynamicTable-tips {
  border: 1px solid#F08080;
}
</style>
