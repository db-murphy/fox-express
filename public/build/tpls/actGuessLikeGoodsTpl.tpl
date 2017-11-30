<div id="guess-like-goods" class="act-goods-list border-bottom dbcdadada" data-skus="{{=it.skus}}" data-xhr-layzr="true">
    <div class="swiper-container">
        <ul class="swiper-wrapper">
            {{ for(var prop in it.goods) { }}
                <li class="swiper-slide {{=it.goods[prop].className}}" data-goods-id="{{=it.goods[prop].skuid}}">
                    <a href="{{=it.goods[prop].href}}">
                        <div class="goods-img default-type2">
                            <img src="{{=it.goods[prop].imgurl}}" class="animated" loaded="true" onerror="imgError(this)">
                        </div>
                        <p class="goods-price">
                            <span class="n-price"><em>¥</em></span>
                            <del class="o-price"><em>¥</em></del>
                        </p>
                        <p class="name ellipsis">{{=it.goods[prop].name}}</p>
                    </a>
                </li>
            {{ } }}
            <li class="swiper-slide swiper-slide-next">
                <div class="total-count">
                    <div class="total-inner">
                        <p class="txt">查看全部</p>
                        <p class="num">{{=it.totalGoodsNum}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>