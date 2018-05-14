<template>
    <div>
        <script :id=id type="text/plain"></script>
        <script type="text/javascript" src='/UE/ueditor.config.js'></script>
        <script type="text/javascript" src='/UE/ueditor.all.js'></script>
        <script type="text/javascript" src='/UE/lang/zh-cn/zh-cn.js'></script>
        <script type="text/javascript" src='/UE/ueditor.parse.js'></script>
    </div>
</template>
<script>
  export default {
    name: 'UE',
    data () {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      },
      id: {
        type: String
      },
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor(this.id, this.config); // 初始化UE
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>
