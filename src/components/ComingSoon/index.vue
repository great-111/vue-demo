<template>
  <div class="movie_body">
    <ul>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg"></div>
        <div class="info_list">
          <h2>无名之辈2</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg"></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg"></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg"></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg"></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg"></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg"></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg"></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'ComingSoon'
}
</script>

<style>
  #content .movie_menu {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    z-index: 10;
  }

  .movie_menu .city_name {
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
  }

  .movie_menu .city_name.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }

  .movie_menu .hot_swtich {
    display: flex;
    height: 100%;
    line-height: 45px;
  }

  .movie_menu .hot_item {
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
  }

  .movie_menu .hot_item.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }

  .movie_menu .search_entry {
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
  }

  .movie_menu .search_entry.active {
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }

  .movie_menu .search_entry i {
    font-size: 24px;
    color: red;
  }
</style>
