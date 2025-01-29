const imagesObj = {
    iPhone: ['images/iphone1.jpg', 'images/iphone2.jpg', 'images/iphone1.jpg'],
    Huawei: ['images/huawei1.jpg', 'images/huawei2.jpg', 'images/huawei3.jpg'],
    Samsung: ['images/samsung1.jpg', 'images/samsung2.jpg', 'images/samsung3.jpg'],
    Lenovo: ['images/lenovo1.jpg', 'images/lenovo2.jpg', 'images/lenovo3.jpg'],
    MacBook: ['images/macbook1.jpg', 'images/macbook2.jpg', 'images/macbook3.jpg'],
    Dell: ['images/dell1.jpg', 'images/dell2.jpg', 'images/dell3.jpg'],
    HP: ['images/hp1.jpg', 'images/hp2.jpg', 'images/hp3.jpg'],
    ZenBook: ['images/zenbook1.jpg', 'images/zenbook2.jpg', 'images/zenbook3.jpg']
};

function generateSliderLayout() {
    return `<div class="slider">
    <div class="indicators">
        <div class="indicator active" data-id="1"></div>
        <div class="indicator" data-id="2"></div>
        <div class="indicator" data-id="3"></div>
    </div>
      <div class="slides">
        <div class="slide active"></div>
        <div class="slide"></div>
        <div class="slide"></div>
      </div>
      <div class="controls">
        <button type="button" class="prev-btn" data-action="prev">Prev</button>
        <button type="button" class="next-btn" data-action="next">Next</button>
      </div>
    </div>`;
}
