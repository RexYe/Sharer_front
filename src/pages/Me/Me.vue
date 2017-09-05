<template>
  <div class="me">
    <div class="user-photo-div">
      <div class="user-photo">
        <img src="../../img/b89188fdfa75a7207972cb081f33aae6.jpg" >
      </div>
      <div class="user-name">
          <span>七肖</span>
      </div>
    </div>
    <div class="user-fun-div">
      <div v-for="item in list" class="myinfo">
        <div class="img">
          <img id="myinfo" :src="item.imgsrc" >
        </div>
        <div class="menu-text">
          <span>{{item.name}}</span>
        </div>
        <div class="img">
            <img :src="item.imggo">
        </div>
      </div>
    </div>
    <bottomMenu1 />
  </div>
</template>

<script>
import bottomMenu1 from '../../components/bottomMenu/bottomMenu'
import './Me.css'
export default {
  name:'me',
  data () {
    return {
      list:[{
        name:'个人资料',
        imgsrc:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACn0lEQVRYR+1WO3baQBS9TyQ+TuesAFwkR6oiVsBkBSiFhTvMCoxXEHsFISuw3VmiCFkBkxXgTspJgbyCkCrxOTEvZySEhUASHwdSZCrEzLx35973I+x40Y79498AoAu7SYDFoINtMELgEQM9X7rXpAv7nEDvGfxlG85jHwSqMfiCDGF/B+jak057mwAM0egwUCdDNFgh8aV7vk0AMfOFACrCOtin52/ApTtf3gRPBbIQgC6OKwBfEiAenfLtb3Drm+zebgqkEIAh7AEDhwC3gZIEUKHwN9cYWjXNxitxZJZA9SxgDBp9lc7HeD8XgCEaKiA/MOitL2+U8+nSha2+A1+6J8n/1R0GW1kACDTypDPdLwLQAWB50qmkDUYXUfekW91EhlwAk1fCl25C/8idLo5OCNqlJ52NqugSDHDTk+7L9Cuj/GUzDS42mMdKEnQBA8eCwP3FMdAYEvA5XbjCdMW+mQXgAQ+jZPYUZkEkA5V/4b4ayN4oot9WxaoNaOamNaEQgEqrZ9AGAM486XTUC19gbwjQhfpOv/S1sC0NdJojQeBLp7VUGiYOhSmo9NZFJEtW8Kl9YJxXzmdSN5eBSM+9UwIpgyEDqjISeMiAkqb11ySIqKc+IxxWOskmpWgugRT9Zca45cvuVczWtGekNPD73YVtPpMBQzR6AMyfuDfj4FtUjABq+tI5TGuaPrsok+KAVnPIXDfUhX0FUA00nim1ScPEZDHQ8qU7M0FFcfC40qmXKunhIDQHYBL9ioVyVkQz+IdqUkkJVi3LhWkYtWPM9YK8V60CohDAKsbWOZsEEAA88KT7bh1D694xhP0JoCrF3Y0BNW492chVAKxCkbxnYUudVLG51rvu65a7p0k17GzU05dzlH/qP4CdM/AHicuvCWcsyNkAAAAASUVORK5CYII=',
        imggo:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAs0lEQVRYR+3W0QmDQBCE4d8KTAkpTTtKB0knSQt2YAtWkLCQxxDW2ZFDOJ8P52PYPW6g8Tc0zqcDegOnbOAKrK7tURq4ASMwOxAKIHIfwNuBUAE2RAVgQVQBZYQDUEK4ADLCCZAQRwACMmXvCCcg7oZd4XHYBZDCXQA53AEohVcAF+AObHsG7tdgKjMQ4U9gqYarDby+74H0qv1bSaWB5g+S7B2TOqc0kPpx9lAH9AaaN/ABETMcIUei+UcAAAAASUVORK5CYII='
      },{
        name:'设置',
        imgsrc:'',
        imggo:''
      },{
        name:'关于我们',
        imgsrc:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADa0lEQVRYR8VXQVYaQRD9RfJistKcQFwkb1iJJ0h7As1CcBc4gXoCyQnEEwR3Di6CJ7BzguCKSbLBE0hWDCRSedU9IwMyTA/Je6n3fOCju/rX76pf1YT/bJTnfE8dKsJkj0FlAEUCirKfgT6iPyZ0vt34165+nQB4qtIg4AigjejAW4AH8p1AAwZvyG8EbNuDecBAM8T4vK87Zl2aLQXwVlX2C6CzKNI7AE0GdQJ9KRE/MU8dFoEHBVCNQO8EyATU+Kb989wAbNR0CuCOMWkE+qrlSqusE/DPQE0Amwy0Au3XF+1fyICnKi0CfWDgNsRIZdGYBqyo9jde4kVTfAHc7en2zvzaJwDiyBl8Eeh2LU/UaWtLqipMHC1iYgZARNtniTzQvmT6P7OYVQAnPe0LIGMzAEqq2peMDjEuutJuExXbLhnvqWqXwJtDjLdi/48ASqp6DOCMMam7JtwbdVB+jsLXKJjznvbFR6pZHeGb5PUmAZjS6mnfiIuLeeqgRih8itbOUJu231MVLSU6xOi1sGAAJCJxcpJ0Lkkr/4cYN12uLQYdM20AxFn6G5OdH/qq6xL9qmukNF9h7R7AdU/7+waA0AKgHOi2kVoXszW+JipZY0AH2t912Tc9jzYD7W8lASDQbeXixF4Z3SR7Q56yLalqB8BeT/sUXwEz+IsrALkyBhuRItA6gMwKmM8bkfmVAVgabUnJdwbtBvpSrtHJYrV9BCACIZ3LlQELwJYgg3/myZ0o6WevwCahTQqnEGzimoYl2TzEqOZSgrHvSAuKojkzZcigrbRePw9MZFtarXQ5mY4egPp33ZbIMq2kqjxThqsIUeTEHCYJHGK878LCtOFZyX+UYk9VBgDdu16DbSxmBMtVAXEJzkhxJA5mAsrTjDK5nluwtBlFEtllgEOMdlzozA/AKi5QKMe5tnAgAbjT0+33eQ9Ytn465vHHQLdNA7NCNmfLxqdVASXatmlAST9Lh1JhYohx/W+uI2vATX0XJDb2J+AT1xqfis2hAviUAGlwqWK19GEi1AEkY/W6tFyAWyHG12mMRGP4nn2YQIlMy2Mmeefz15j5NIucyqx3HHU+kZ4ugwZkPiH6Ydp4FG0sThdAoZGlrJkAkoijCViSqGifXlOTUZ6APmPSCfGr45o3uQCsWgXL9v0BImHjMEA7nMQAAAAASUVORK5CYII=',
        imggo:''
      },]
    }
  },
  components:{
    bottomMenu1
  }
}
</script>

<style lang="css">
</style>
