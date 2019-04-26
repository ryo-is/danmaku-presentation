import { Component, Vue } from "vue-property-decorator"
import DanmakuBodyComponent from "@/components/danmakuBody/DanmakuBody.vue"

@Component({
  components: {
    DanmakuBodyComponent
  }
})
export default class DanmakuLayerComponent extends Vue {
  public danmakuText: string = "弾幕だよー"
  public danmakuTexts: string[] = ["弾幕だよー"]

  public created() {
    setInterval(() => {
      this.danmakuTexts.push("弾幕だよー弾幕だよー弾幕だよー")
    }, 5000)
  }
}
