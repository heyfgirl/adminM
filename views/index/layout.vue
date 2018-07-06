<template>
    <div>
			<div class="content">
				<div>{{msg}}</div>
				<router-view></router-view>
			</div>
    </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>