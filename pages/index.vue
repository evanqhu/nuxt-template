<!-- 首页 home -->
<script setup lang="ts">
definePageMeta({
  // path: '/:channel(channel[1-9]\\d?)?',
})

useSeoMeta({
  title: 'Home Page',
  description: 'My home page description',
})

/** 运行时变量 */
// const runtimeConfig = useRuntimeConfig()
/** 全局 App 变量 */
// const appConfig = useAppConfig()
/** App Store */
const appStore = useAppStore()
const { webConfig } = appStore
const { adSense, adExchange } = webConfig

const { isMobile } = useCustomDevice()
const { smartNavigate } = useCustomRouting()

const { data: userList, refresh: refreshUsers } = useLazyAsyncData('topMovers', api.defaultApi.requestUsers)

const { data: jokeData, refresh: refreshJoke } = useLazyAsyncData('joke', () => $fetch('http://hmajax.itheima.net/api/randjoke'), {
  watch: [isMobile],
  // 使用 transform 函数来更改查询的结果
  transform: data => (data as any).data || '',
})
</script>

<template>
  <div class="app-content-wrapper">
    <div class="home app-content">
      <div>首页</div>
      <br>
      <el-button @click="refreshJoke()">
        刷新 joke 数据
      </el-button>
      <el-button @click="refreshUsers()">
        刷新 Users 数据
      </el-button>
      <br>
      <br>
      <p>{{ jokeData }}</p>
      <br>
      <div class="user-list">
        <div v-for="user in userList" :key="user.id" class="user-item">
          <span class="user-name">
            {{ user.name }}:
          </span>
          <span class="user-email">
            {{ user.email }}
          </span>
        </div>
      </div>
      <br>
      <button @click="smartNavigate('/detail')">
        to detail
      </button>
      <br>
      <br>
      <div>isMobile: {{ isMobile }}</div>
      <br>
      <Counter />
      <br>
      <SvgIcon name="nuxt" size="2rem" />
      <br>
      <Icon name="local:nuxt" size="2rem" />
      <br>
      <!-- <AdsbyGoogle :ads-attrs="adSense?.home_1" /> -->
      <!-- <AdsbyGoogle :ads-attrs="adSense?.home_2" /> -->
      <!-- <AdsbyExchange :ads-attrs="adExchange?.home_1" /> -->
      <br>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident saepe laboriosam tempore molestiae reprehenderit qui, commodi at minus exercitationem dolorum accusamus facilis quibusdam. Delectus soluta sint maiores ipsa reprehenderit!
        Exercitationem excepturi at reprehenderit! Tempore consectetur facilis rem accusamus dolor voluptate impedit rerum! Facilis, qui! Exercitationem hic magnam sapiente soluta rem facere laborum, laboriosam fugit harum repellendus esse natus amet.
        Consequuntur eveniet blanditiis, eum aliquid qui doloribus rerum libero non dolorem. Sint nihil voluptate error pariatur ducimus natus, accusantium est. Quis dignissimos ab odit quia molestias quaerat voluptates distinctio veritatis.
        Voluptatem deserunt delectus est sint dolorem, odio ex vitae asperiores in quisquam ipsa velit fugit? Porro dicta adipisci exercitationem, cumque ducimus, possimus nisi ea rerum quisquam recusandae expedita laborum architecto.
        Explicabo quas qui rem quod magnam atque animi provident ex, deleniti assumenda repudiandae? Enim expedita maxime, facilis itaque magni deleniti eaque reprehenderit, tenetur nobis officiis, recusandae eligendi quis doloremque dignissimos.
        Soluta vel mollitia eligendi commodi in incidunt atque excepturi sapiente praesentium, nobis labore eveniet possimus maxime nam, ducimus ipsum. Consequatur eos culpa inventore possimus omnis architecto fugiat fuga obcaecati beatae!
        Maiores, alias corrupti? Non minima neque adipisci quisquam! Quo, dolor sed. Autem illum, eveniet, rem fugiat dignissimos quas nemo tempora officiis eius perspiciatis dolor fugit a unde error quae adipisci.
        At inventore fuga officiis adipisci, magnam fugit, id repellat iure, excepturi pariatur molestiae ducimus? Porro dolores suscipit facere dolore. Quia porro tempora modi, delectus praesentium quo excepturi eligendi laborum sunt!
        Natus incidunt nobis molestiae maxime at quam facere consequatur neque voluptatum possimus, suscipit ab recusandae, sint provident asperiores deserunt ad, aliquam minima dolores eveniet adipisci harum ipsa reiciendis. Odit, sunt.
        Velit rerum harum perspiciatis voluptatibus iure distinctio totam vel! Corrupti perferendis commodi distinctio consequatur possimus cumque, blanditiis dolorem soluta architecto eum dicta magni saepe magnam deleniti, delectus, hic amet? Mollitia.
      </div>
      <NuxtImg src="/images/demo.jpg" />
      <img src="~/assets/images/vite.jpg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;

  img {
    width: 100%;
  };
}
</style>
