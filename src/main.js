import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import App from './App'
import store from './store'
import router from './router'
import container from "@/components/container/index";
import directive from './directive' // directive
import plugins from './plugins' // plugins
import { download } from '@/utils/request'
//z6-bpm插件
import axios from 'axios';
Vue.prototype.$axios = axios;
import fileServer from 'file-saver';
import xlsx from 'xlsx';
Vue.prototype.$fileServer=fileServer;
Vue.prototype.$xlsx=xlsx;
import { vuePlugin } from '@/package/highlight';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
Vue.use(vuePlugin);
import MyPD from '@/package/index.js';
Vue.use(MyPD);
import DataV from '@jiaminghi/data-view';
Vue.use(DataV);
import '@/assets/iconfont/iconfont.js';
import '@/package/theme/index.scss';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import '@/assets/css/vue-bmpn.css';
import '@/assets/styles/theme/theme-base.scss';
import '@/assets/styles/zsix.scss';

import './assets/icons' // icon
import './permission' // permission control
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from "@/utils/ruoyi";
// 分页组件
import Pagination from "@/components/Pagination";
// 自定义表格工具组件
import RightToolbar from "@/components/RightToolbar"
// 富文本组件
import Editor from "@/components/Editor"
// 文件上传组件
import FileUpload from "@/components/FileUpload"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview"
// 字典标签组件
import DictTag from '@/components/DictTag'
// 头部标签组件
import VueMeta from 'vue-meta'
// 字典数据组件
import DictData from '@/components/DictData'
//表单自定义组件
import formDesigner from '@/components/formcomponents/formDesigner';
import fancyEditor from '@/components/formcomponents/extend/fancyEditor';
import fancyHtml from '@/components/formcomponents/extend/fancyHtml';
import fancyText from '@/components/formcomponents/extend/fancyText';
import fancyBarCode from 'vue-barcode';
import fancyDialogList from '@/components/formcomponents/extend/fancyDialogList';
import iconDialog from '@/components/formcomponents/iconDialog';
import Apis from '@/libs/api';

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

Vue.prototype.Apis = Apis;

// 全局组件挂载
Vue.component('DictTag', DictTag)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
Vue.component('Editor', Editor)
Vue.component('FileUpload', FileUpload)
Vue.component('ImageUpload', ImageUpload)
Vue.component('ImagePreview', ImagePreview)
Vue.component("container",container);
Vue.component('form-designer', formDesigner);
Vue.component('fancy-editor', fancyEditor);
Vue.component('fancy-html', fancyHtml);
Vue.component('fancy-text', fancyText);
Vue.component('fancy-bar-code', fancyBarCode);
Vue.component('fancy-dialog-list', fancyDialogList);
Vue.component('icon-dialog', iconDialog);
Vue.component('icon', () => import('@/components/icon/index.vue'));
Vue.component('icon-svg', () => import('@/components/icon-svg/index.vue'));

Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
DictData.install()

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
