import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class DanmakuBodyComponent extends Vue {
  @Prop() public text: string

  public textMoveClass: boolean = false

  public created() {
    setTimeout(() => {
      this.textMoveClass = true
    }, 1000)
  }
}
