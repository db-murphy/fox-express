<a href="{{=it.actHref}}" class="showgoods-item item J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="{{=it.map}}">
    <div class="img-wraper default-type3">
        <img src="../build/images/placeholder.png" class="animated" data-layzr="{{=it.coverImgNew}}" class="animated">
    </div>
    <div class="act-detail">
        <div class="brand-logo">
            <img src="../build/images/placeholder.png" data-logo-layzr="{{=it.brandLogo4}}">
        </div>
        <p>{{=it.title}}</p>
        <span class="preferential-msg">{{=it.reduceMsg}}</span>
    </div>
    {{? it.card }}
    <span class="icon-618"></span>
    {{?}}
</a>