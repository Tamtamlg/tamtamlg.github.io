"use strict"

// global variables
var counter = 6; // number of throw
var result = []; // throw results

// Preloader start
var Preloader = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Preloader() {
    Phaser.Scene.call(this, {
      key: "preloader"
    });
  },

  preload: function() {
    var progressBox = this.add.graphics();
    var progressBar = this.add.graphics();
    progressBox.fillStyle("0xffffff", 0.5);
    progressBox.fillRect(240, 270, 320, 50);
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Загрузка...",
      style: {
        font: "30px monospace",
        fill: "#fce302",
        stroke: "red",
        strokeThickness: 2
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff"
      }
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.on("progress", function(value) {
      percentText.setText(parseInt(value * 100) + "%");
      progressBar.clear();
      progressBar.fillStyle("0xffb30b", 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on("complete", function() {
      percentText.destroy();
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
    });

    this.load.image("background", "assets/bg.png");
    this.load.image("short", "assets/short.png");
    this.load.image("long", "assets/long.png");
    this.load.image("shortMin", "assets/short-min.png");
    this.load.image("longMin", "assets/long-min.png");
    this.load.image("buttonText", "assets/button-text.png");
    this.load.image("buttonText2", "assets/button-text2.png");
    this.load.image("buttonText3", "assets/button-text3.png");
    this.load.multiatlas("texture", "assets/texture.json", "assets");
    this.load.multiatlas("money", "assets/money.json", "assets");
  },

  create: function() {
    var frames1 = [
      {
        key: "money",
        frame: "img1.png"
      },
      {
        key: "money",
        frame: "img2.png"
      },
      {
        key: "money",
        frame: "img3.png"
      },
      {
        key: "money",
        frame: "img4.png"
      },
      {
        key: "money",
        frame: "img5.png"
      },
      {
        key: "money",
        frame: "img6.png"
      },
      {
        key: "money",
        frame: "img7.png"
      },
      {
        key: "money",
        frame: "img8.png"
      },
      {
        key: "money",
        frame: "img12.png"
      },
      {
        key: "money",
        frame: "img13.png"
      },
      {
        key: "money",
        frame: "img14.png"
      },
      {
        key: "money",
        frame: "img15.png"
      },
      {
        key: "money",
        frame: "img16.png"
      },
      {
        key: "money",
        frame: "img17.png"
      },
      {
        key: "money",
        frame: "img18.png"
      },
      {
        key: "money",
        frame: "img19.png"
      },
      {
        key: "money",
        frame: "img20.png"
      },
      {
        key: "money",
        frame: "img21.png"
      },
      {
        key: "money",
        frame: "img22.png"
      },
      {
        key: "money",
        frame: "img23.png"
      },
      {
        key: "money",
        frame: "img24.png"
      },
      {
        key: "money",
        frame: "img25.png"
      },
      {
        key: "money",
        frame: "img26.png"
      },
      {
        key: "money",
        frame: "img27.png"
      },
      {
        key: "money",
        frame: "img28.png"
      },
      {
        key: "money",
        frame: "img29.png"
      },
      {
        key: "money",
        frame: "img30.png"
      },
      {
        key: "money",
        frame: "img31.png"
      },
      {
        key: "money",
        frame: "img32.png"
      },
      {
        key: "money",
        frame: "img33.png"
      },
      {
        key: "money",
        frame: "img41.png"
      }
    ];

    var frames2 = [
      {
        key: "money",
        frame: "img1.png"
      },
      {
        key: "money",
        frame: "img2.png"
      },
      {
        key: "money",
        frame: "img3.png"
      },
      {
        key: "money",
        frame: "img4.png"
      },
      {
        key: "money",
        frame: "img5.png"
      },
      {
        key: "money",
        frame: "img6.png"
      },
      {
        key: "money",
        frame: "img7.png"
      },
      {
        key: "money",
        frame: "img8.png"
      },
      {
        key: "money",
        frame: "img12.png"
      },
      {
        key: "money",
        frame: "img13.png"
      },
      {
        key: "money",
        frame: "img14.png"
      },
      {
        key: "money",
        frame: "img15.png"
      },
      {
        key: "money",
        frame: "img16.png"
      },
      {
        key: "money",
        frame: "img17.png"
      },
      {
        key: "money",
        frame: "img18.png"
      },
      {
        key: "money",
        frame: "img19.png"
      },
      {
        key: "money",
        frame: "img20.png"
      },
      {
        key: "money",
        frame: "img21.png"
      },
      {
        key: "money",
        frame: "img22.png"
      },
      {
        key: "money",
        frame: "img23.png"
      },
      {
        key: "money",
        frame: "img24.png"
      },
      {
        key: "money",
        frame: "img25.png"
      },
      {
        key: "money",
        frame: "img26.png"
      },
      {
        key: "money",
        frame: "img27.png"
      },
      {
        key: "money",
        frame: "img28.png"
      },
      {
        key: "money",
        frame: "img29.png"
      },
      {
        key: "money",
        frame: "img30.png"
      },
      {
        key: "money",
        frame: "img31.png"
      },
      {
        key: "money",
        frame: "img32.png"
      },
      {
        key: "money",
        frame: "img33.png"
      },
      {
        key: "money",
        frame: "img40.png"
      }
    ];

    var frames3 = [
      {
        key: "texture",
        frame: "shape15.png"
      },
      {
        key: "texture",
        frame: "shape21.png"
      },
      {
        key: "texture",
        frame: "shape27.png"
      },
      {
        key: "texture",
        frame: "shape31.png"
      },
      {
        key: "texture",
        frame: "shape39.png"
      },
      {
        key: "texture",
        frame: "shape41.png"
      },
      {
        key: "texture",
        frame: "shape43.png"
      },
      {
        key: "texture",
        frame: "shape47.png"
      },
      {
        key: "texture",
        frame: "shape51.png"
      },
      {
        key: "texture",
        frame: "shape55.png"
      },
      {
        key: "texture",
        frame: "shape59.png"
      },
      {
        key: "texture",
        frame: "shape63.png"
      },
      {
        key: "texture",
        frame: "shape67.png"
      },
      {
        key: "texture",
        frame: "shape71.png"
      },
      {
        key: "texture",
        frame: "shape75.png"
      },
      {
        key: "texture",
        frame: "shape79.png"
      },
      {
        key: "texture",
        frame: "shape83.png"
      },
      {
        key: "texture",
        frame: "shape87.png"
      },
      {
        key: "texture",
        frame: "shape95.png"
      },
      {
        key: "texture",
        frame: "shape99.png"
      }
    ];

    this.anims.create({
      key: "money1",
      frames: frames1,
      frameRate: 17,
      repeat: 0
    });

    this.anims.create({
      key: "money2",
      frames: frames2,
      frameRate: 13,
      repeat: 0
    });

    this.anims.create({
      key: "background",
      frames: frames3,
      frameRate: 7,
      repeat: 0
    });

    this.scene.start("text1");
  }
});
// Preloader end

// Text1 start
var Text1 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function GameOver() {
    Phaser.Scene.call(this, {
      key: "text1"
    });
  },

  create: function() {
    this.add.image(400, 300, "background");

    var content =
      "Древние китайские легенды повествуют о правителе Фу Си, который изобрел «Книгу Перемен» в 3 тысячелетии до н. э. В книге всего 64 символа - гексаграммы, каждая из которых состоит из шести черт. Эти черты обозначают последовательные ступени развития ситуации. Черты могут быть цельными, или прерванными. Первые символизируют активное состояние, свет, напряжение, а вторые - пассивное состояние, тьму, податливость.";

    var text = this.add.text(50, 100, content, {
      fontSize: "20px",
      fontWeight: "bold",
      fill: "#000",
      stroke: "#000",
      strokeThickness: 1,
      wordWrap: {
        width: 380,
        useAdvancedWrap: true
      }
    });

    var btnGame = this.add.image(610, 300, "buttonText");
    btnGame.setInteractive({
      useHandCursor: true
    });
    btnGame.once(
      "pointerup",
      function() {
        counter = 6;
        result = [];
        this.scene.start("game");
      },
      this
    );

    var btnNext = this.add.image(240, 500, "buttonText3");
    btnNext.setInteractive({
      useHandCursor: true
    });
    btnNext.once(
      "pointerup",
      function() {
        this.scene.start("text2");
      },
      this
    );

    var shape = this.add.sprite(0, 0, "texture", "shape15.png");
    shape.anims.play("background");
  }
});
// Text1 end

// Text2 start
var Text2 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function GameOver() {
    Phaser.Scene.call(this, {
      key: "text2"
    });
  },

  create: function() {
    this.add.image(400, 300, "background");

    var content =
      'Ваше будущее неотделимо от вашего прошлого и настоящего. В "Книге перемен" они составляют единую линию, прервать которую означало бы сбиться с правильного пути и попасть в крайне неприятную ситуацию. Соответственно этому, все гексаграммы китайской "Книги перемен" также являют собой картину перехода одной ситуации в другую. И напрасно пытаться понять выпавший вам знак, пропустив мимо внимания то, что ему предшествовало.';

    var text = this.add.text(50, 100, content, {
      fontSize: "20px",
      fontWeight: "bold",
      fill: "#000",
      stroke: "#000",
      strokeThickness: 1,
      wordWrap: {
        width: 380,
        useAdvancedWrap: true
      }
    });
    text.alpha = 0;
    var tween = this.tweens.add({
      targets: text,
      alpha: 1,
      ease: "Linear",
      duration: 500
    });

    var btnGame = this.add.image(610, 300, "buttonText");
    btnGame.setInteractive({
      useHandCursor: true
    });
    btnGame.once(
      "pointerup",
      function() {
        counter = 6;
        result = [];
        this.scene.start("game");
      },
      this
    );

    var btnNext = this.add.image(240, 500, "buttonText3");
    btnNext.setInteractive({
      useHandCursor: true
    });
    btnNext.once(
      "pointerup",
      function() {
        this.scene.start("text3");
      },
      this
    );
  }
});
// Text2 end

// Text3 start
var Text3 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function GameOver() {
    Phaser.Scene.call(this, {
      key: "text3"
    });
  },

  create: function() {
    this.add.image(400, 300, "background");

    var content =
      "Не нужно расстраиваться, если значение составленной гексаграммы затронет неприятные для вас факты или просто не отразит всех ваших ожиданий. Так же, как и сама жизнь, гадание не может заключать в себе только приятные стороны: ведь гадание - это отражение жизни, ее зеркало.";

    var text = this.add.text(50, 100, content, {
      fontSize: "20px",
      fontWeight: "bold",
      fill: "#000",
      stroke: "#000",
      strokeThickness: 1,
      wordWrap: {
        width: 380,
        useAdvancedWrap: true
      }
    });
    text.alpha = 0;
    var tween = this.tweens.add({
      targets: text,
      alpha: 1,
      ease: "Linear",
      duration: 500
    });

    var btnGame = this.add.image(610, 300, "buttonText");
    btnGame.setInteractive({
      useHandCursor: true
    });
    btnGame.once(
      "pointerup",
      function() {
        counter = 6;
        result = [];
        this.scene.start("game");
      },
      this
    );

    var btnNext = this.add.image(240, 500, "buttonText3");
    btnNext.setInteractive({
      useHandCursor: true
    });
    btnNext.once(
      "pointerup",
      function() {
        this.scene.start("text4");
      },
      this
    );
  }
});
// Text3 end

// Text4 start
var Text4 = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function GameOver() {
    Phaser.Scene.call(this, {
      key: "text4"
    });
  },

  create: function() {
    this.add.image(400, 300, "background");

    var content1 =
      "Пожалуйста, не задавайте один и тот же вопрос дважды. Верным будет первое предсказание Книги.";
    var content2 =
      "Не распыляйте свое внимание, пытаясь получить ответы на несколько вопросов за один раз. Вы сможете получить большую пользу, если ограничитесь одним гаданием и хорошо подумаете над советом Книги.";
    var content3 =
      "Ваши вопросы не должны быть связаны с недоброжелательлными намерениями. Книга не терпит, когда ее используют, чтобы навредить чьему-либо благополучию.";

    var textSettings = {
      fontSize: "20px",
      fontWeight: "bold",
      fill: "#000",
      stroke: "#000",
      strokeThickness: 1,
      wordWrap: {
        width: 380,
        useAdvancedWrap: true
      }
    };

    var text1 = this.add.text(50, 100, content1, textSettings);
    var text2 = this.add.text(50, 195, content2, textSettings);
    var text3 = this.add.text(50, 370, content3, textSettings);

    text1.alpha = 0;
    text2.alpha = 0;
    text3.alpha = 0;
    var tween = this.tweens.add({
      targets: [text1, text2, text3],
      alpha: 1,
      ease: "Linear",
      duration: 500,
      repeat: 0
    });

    var btnGame = this.add.image(610, 300, "buttonText");
    btnGame.setInteractive({
      useHandCursor: true
    });
    btnGame.once(
      "pointerup",
      function() {
        counter = 6;
        result = [];
        this.scene.start("game");
      },
      this
    );
  }
});
// Text4 end

// Game start
var Game = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function Game() {
    Phaser.Scene.call(this, {
      key: "game"
    });
  },

  create: function() {
    this.add.image(400, 300, "background");

    if (counter < 6) {
      var message = this.add.text(
        50,
        120,
        "Осталось бросить " +
          counter +
          (counter === 5 || counter === 1 ? " раз" : " раза"),
        {
          fontSize: "26px",
          fontWeight: "bold",
          fill: "#000",
          stroke: "#000",
          strokeThickness: 2
        }
      );
    } else {
      var text = this.add.text(
        50,
        120,
        "Кликните по полю,\nчтобы бросить монеты",
        {
          fontSize: "26px",
          fontWeight: "bold",
          fill: "#000",
          stroke: "#000",
          strokeThickness: 2
        }
      );
      text.alpha = 0;
      var tween = this.tweens.add({
        targets: text,
        alpha: 1,
        ease: "Linear",
        duration: 500
      });
    }

    this.physics.world.collideWorldBounds = true;

    var group = this.physics.add.group({
      bounceX: 0,
      bounceY: 0.4,
      collideWorldBounds: true
    });

    var sprite1 = this.physics.add.sprite(600, 80, "money", "img1.png");
    var sprite2 = this.physics.add.sprite(620, 70, "money", "img1.png");
    var sprite3 = this.physics.add.sprite(640, 80, "money", "img1.png");
    group.add(sprite1);
    group.add(sprite2);
    group.add(sprite3);

    // this.input.setDraggable(sprite1.setInteractive());
    // this.input.setDraggable(sprite2.setInteractive());
    // this.input.setDraggable(sprite3.setInteractive());
    // this.input.on("dragstart", function (pointer, obj) {
    //   obj.body.moves = false;
    // });
    // this.input.on("drag", function (pointer, obj, dragX, dragY) {
    //   obj.setPosition(dragX, dragY);
    // });
    // this.input.on("dragend", function (pointer, obj) {
    //   obj.body.moves = true;
    // });

    sprite1.alpha = 0;
    sprite2.alpha = 0;
    sprite3.alpha = 0;
    var tween = this.tweens.add({
      targets: [sprite1, sprite2, sprite3],
      alpha: 1,
      ease: "Linear",
      duration: 500
    });

    var y = 500;
    for (var i = 0; i < result.length; i++) {
      this.add.image(230, y, result[i] < 1 ? "short" : "long");
      y -= 40;
    }

    var self = this;
    this.input.once("pointerup", function() {
      var random1 = Math.random();
      var random2 = Math.random();
      var random3 = Math.random();
      var sum = 0;

      if (text) {
        text.alpha = 0;
      }

      if (random1 > 0.5) {
        sum += 1;
        sprite1.play("money1");
        self.tweens.add({
          targets: sprite1,
          x: 600 + Math.floor(random1 * 100),
          ease: "Linear",
          duration: 2500
        });
      } else {
        sprite1.anims.play("money2");
        self.tweens.add({
          targets: sprite1,
          x: 600 + Math.floor(random1 * 100),
          ease: "Linear",
          duration: 2500
        });
      }
      sprite1.setGravity(0, 900);
      setTimeout(function() {
        if (random2 > 0.5) {
          sum += 1;
          sprite2.play("money1");
          self.tweens.add({
            targets: sprite2,
            x: 620 + Math.floor(random2 * 100),
            ease: "Linear",
            duration: 2000
          });
        } else {
          sprite2.anims.play("money2");
          self.tweens.add({
            targets: sprite2,
            x: 620 - Math.floor(random2 * 100),
            ease: "Linear",
            duration: 2500
          });
        }
        sprite2.setGravity(0, 900);
      }, 200);
      setTimeout(function() {
        if (random3 > 0.5) {
          sum += 1;
          sprite3.play("money1");
          self.tweens.add({
            targets: sprite3,
            x: 640 - Math.floor(random3 * 100),
            ease: "Linear",
            duration: 2500
          });
        } else {
          sprite3.anims.play("money2");
          self.tweens.add({
            targets: sprite3,
            x: 640 + Math.floor(random3 * 100),
            ease: "Linear",
            duration: 2500
          });
        }
        sprite3.setGravity(0, 900);
      }, 400);
      setTimeout(function() {
        self.tweens.add({
          targets: [sprite1, sprite2, sprite3],
          alpha: 0,
          ease: "Linear",
          duration: 500
        });
      }, 3500);
      setTimeout(function() {
        if (counter > 1) {
          self.scene.start("levelend");
          counter--;
        } else {
          self.scene.start("gameover");
          counter = 6;
        }
        if (sum > 1) {
          result.push(0);
        } else {
          result.push(1);
        }
      }, 4000);
    });
  }
});
// Game end

// LevelEnd start
var LevelEnd = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function GameOver() {
    Phaser.Scene.call(this, {
      key: "levelend"
    });
  },

  create: function() {
    this.add.image(400, 300, "background");

    var message = this.add.text(
      50,
      120,
      "Осталось бросить " +
        counter +
        (counter === 5 || counter === 1 ? " раз" : " раза"),
      {
        fontSize: "26px",
        fontWeight: "bold",
        fill: "#000",
        stroke: "#000",
        strokeThickness: 2
      }
    );
    if (counter === 5) {
      message.alpha = 0;
      var tween = this.tweens.add({
        targets: message,
        alpha: 1,
        ease: "Linear",
        duration: 500
      });
    }

    var y = 500;
    for (var i = 0; i < result.length; i++) {
      this.add.image(230, y, result[i] < 1 ? "short" : "long");
      y -= 40;
    }

    var self = this;
    setTimeout(function() {
      self.scene.start("game");
    }, 1000);
  }
});
// LevelEnd end

// GameOver start
var GameOver = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function GameOver() {
    Phaser.Scene.call(this, {
      key: "gameover"
    });
  },

  create: function() {
    this.add.image(400, 300, "background");

    var zag = "";
    var wtt = "";
    var answerCode = result.join("");

    switch (answerCode) {
      case "111111":
        zag = "ЦЯНЬ. Творчество";
        wtt =
          "Могучий дракон затаился в глубокой пещере, в любой момент готовый покинуть ее. Сначала осторожный и осмотрительный, он затем резко взмоет высоко в небо, устремится к избранной цели и одержит блистательную победу над ней. Добившись своего, он без промедления вернется на землю. Пусть ваш взлет бу­дет похожим на взлет дракона. Но не пытайтесь ни в чем превзойти его - это принесет вам большое разочарование.";
        break;
      case "000000":
        zag = "КУНЬ. Исполнение";
        wtt =
          "Вы ищите счастье, и оно придет, если вы будете терпеливы и дождетесь этого момента. Пусть другие проявляют инициативу, вы же поддерживайте со все­ми доброжелательные отношения. Люди, которым вы помогаете или служите, будут ценить ваши достоинства и не заметят ваших недостатков до тех пор, пока вы скромны. Настанет время, и это принесет вам большое счастье, - если вы будете строго следовать по выбранному пути.";
        break;
      case "100010":
        zag = "ЧЖУНЬ. Начальная трудность";
        wtt =
          "Как растение с трудом пробивается сквозь землю, так и вы не должны смущаться своим медленным продвижением к избранной цели. Прежде чем научитесь ходить, научитесь ползать. Когда же действительно научитесь ходить, не торопитесь бегать. Чем быстрее будете ходить, тем чаше станете падать. Вам нужен наставник, иначе запутаетесь в лабиринте, который сами себе создаете. Знаки, предвещающие большой успех, могут принести неудачу тому, кто берется за слишком многое.";
        break;
      case "010001":
        zag = "МЭН. Недоразвитость";
        wtt =
          "Тот, кто умеет извлекать уроки, тот достигнет боль­ших высот. Будьте чистосердечными и искренними во всем, что бы вы ни делали. Не испрашивайте понапрасну квалифицированных советов. А уж если спросили, - непременно следуйте им. Пренебрежение советами - это та форма неуважения, которая может сильно навредить вам, ибо чем чаще вы будете игнорировать советы, тем реже их вам будут давать.";
        break;
      case "111010":
        zag = "СЮЙ. Необходимость ждать";
        wtt =
          "Будьте осторожны, когда стоите у края ревущего потока. Даже если чувствуете в себе силы, не стоит переплывать его сейчас, - подождите, пока не станете еще сильнее или пока не уменьшится риск. На другом берегу вас могут поджидать новые неприятности. Если же повременить, то сумеете избежать осложнений. Да и друзья помогут вам, если в том будет нужда. Вполне вероятно, что вас ждет удача.";
        break;
      case "010111":
        zag = "СУН. Тяжба";
        wtt =
          "С вашей стороны борьба оправдана, но чем дольше вы будете ее вести, тем более тщетными станут ваши усилия. Это не принесет вам ни славы, ни удачи. Лучше сделаться гибким, как дерево, раскачивае­мое ветром, и выждать, когда пронесутся штормовые облака; лучше принять критику и даже какоето время не привлекать к себе внимание людей, пока вы не окажетесь в состоянии достичь поставленной цели без бессмысленной борьбы.";
        break;
      case "010000":
        zag = "ШИ. Войско";
        wtt =
          "Вероятно, вас скоро ждет борьба. Драться, наступать или ретироваться - решать вам. Вы должны быть готовы нанести удар в нужный момент. Промедление повлечет за собой потери. Люди, от которых вы зависите, должны думать так же. Здесь нужны твердость и решительность.";
        break;
      case "000010":
        zag = "БИ. Приближение";
        wtt =
          "Сейчас воцарились мир и гармония. А с ними пришло время для совместных действий. Итак, будьте искренни, но при этом тщательно выбирайте партнеров и друзей, с тем чтобы ваши идеи находили заслуженный отклик. Цепь, которая кажется достаточно прочной для тех, кто тянет в одном направлении, может порваться, если тянуть в разные стороны.";
        break;
      case "111011":
        zag = "СЯО ЧУ. Воспитание малым";
        wtt =
          "Когда сгущаются грозовые тучи, из них должен пролиться дождь. Если же дождя все еще нет, это не повод готовиться к засухе. Мудрые люди будут готовиться к ливням и даже постараются уберечься от возможного наводнения. Они будут благодарить тучи за то, что те задержались с дождем. Так и в ваших делах - проявите сдержанность в нужный момент, и она подтвердит ваше честное и внимательное отношение к окружающим.";
        break;
      case "110111":
        zag = "ЛИ. Наступление";
        wtt =
          "Ступая твердо и все время смотря себе под ноги, вы тем не менее можете наступить на хвост тигра. Продолжайте идти, как ни в чем ни бывало, пока зверь не проснется. Тот же, кто идет спотыкаясь и озираясь вокруг, может надолго остолбенеть от страха и попасть в лапы кровожадного зверя. Эту гексаграмму очень часто сравнивают с камнями, по которым переходят бурный поток. Стоит одному камню соскользнуть, и путник, теряя равновесие, падает в бурлящую воду. Итак, будьте тверды!";
        break;
      case "111000":
        zag = "ТАЙ. Расцвет";
        wtt =
          "Как нежное дыхание весны возвещает дружные всходы, а великолепная осень - богатый урожай, так и небесные дары дождем прольются на землю. Великие и могучие в этом мире должны проявить внимание и сострадание к сирым и слабым. Пусть на всех хватит и счастья, и богатства.";
        break;
      case "000111":
        zag = "ПИ. Упадок";
        wtt =
          "Начиная с малого и скромного, можно улучшить свое положение, не привлекая внимания и не возбуждая зависти. Вас как будто и нет, а затем - появляетесь, словно из-под земли, но уже осененный небесной благодатью. Ждите, когда перед вами ши­роко распахнутся двери, но и сами будьте готовы к этому.";
        break;
      case "101111":
        zag = "ТУН ЖЭНЬ. Родня";
        wtt =
          "В кромешной мгле и самый слабый свет виден издали. Появляясь из тьмы, озаренные энергией созидания, вы можете воодушевить и других, готовых зажечь такой же огонь в своих и чужих сердцах. Объединенные вместе эти светочи сольются в мощное пламя, которое будет полыхать во все небо. Когда вы достигнете успеха, не следует забывать и тех, кто помогал вам на пути к нему. Разделите свой успех с ними.";
        break;
      case "111101":
        zag = "ДА Ю. Обладание великим";
        wtt =
          "Успех и благосостояние тесно связаны между собой, однако в их основе лежит кропотливый труд. Если вы подходите к решению практических задач с должным пониманием, то сможете справиться с самыми сложными проблемами и завоевать признание. Вместе с тем, не обольщайтесь ранними успехами. Одна из ва­ших слабостей - вы слишком увлекающаяся натура и часто «хватаете через край». Но люди прощают вам этот изъян - их подкупает ваша неподдельная искренность.";
        break;
      case "001000":
        zag = "ЦЯНЬ. Смирение";
        wtt =
          "Скромность и снисхождение - это больше, чем просто добродетели. Если ими правильно и разумно пользоваться, они могут обеспечить вам власть. Скромность - качество постоянное, поэтому, как и величественная гора, производит сильное впечатление. Она может побудить окружающих помогать вам в достижении ваших целей; а помощь понадобится. Так что не отвергайте ее. Но оставайтесь тверды, как скала, если того потребуют от вас обстоятельства и ваши дела. Этим вы можете снискать себе всеобщее уважение.";
        break;
      case "000100":
        zag = "ЮЙ. Вольность";
        wtt =
          "Чтобы добиться заслуженного успеха, вам следует заинтересовать своими идеями окружающих и в нуж­ный момент скоординировать их действия с вашими - в ваших интересах. Поэтому с самого начала своей деятельности важно избегать высокомерного обращения с ними. В противном случае это лишит их всякого желания сотрудничать с вами. Подобным же образом потакание собственным слабостям или самодовольство могут привести к тому, что окружающие утратят инте­рес к вашим начинаниям, и вы станете жертвой собственных иллюзий.";
        break;
      case "100110":
        zag = "СУЙ. Последование";
        wtt =
          "Предоставьте другому выбирать путь и вести вас к нему. Плывя по течению и наблюдая за шхуной того, кто впереди, можно не бояться налететь на рифы. То, что вы достигли тихой гавани живым и невредимым, повысит ваш авторитет, и люди последуют за вами, когда вы вновь пуститесь в плавание, уже самостоятельно.";
        break;
      case "011001":
        zag = "ГУ. Исправление";
        wtt =
          "Вам надлежит исправить какое-то зло, возродить утраченное, устранить недопонимание. Не жалейте энергии. Быть может, вы сумеете сделать больше, чем рассчитываете. Думайте и поступайте правильно. Вы можете смело продвигаться по намеченному пути, даже если это грозит вам разладом с друзьями.";
        break;
      case "110000":
        zag = "ЛИНЬ. Посещение";
        wtt =
          "После успешного начала вам надо приспосабливаться к новым обстоятельствам. Завоевав авторитет, благодаря настойчивости, вы затем проявляйте сдержанность, осторожность, мудрость, великодушие и даже щедрость. Каждый этап вашего пути по-своему прекрасен.";
        break;
      case "000011":
        zag = "ГУАНЬ. Созерцание";
        wtt =
          "Вы, как неугомонный ветер, можете пронестись над землей, заглядывая во все щели. Любопытство и любознательность - ваши основные черты. В детстве вы на все будете смотреть раскрытыми от удивления глазами; позже вас будут интересовать ваши соседи, все ва­ше окружение; затем вы задумаетесь над своим социальным положением, увлечетесь политикой; и, наконец, займетесь медитацией - постижением смысла жизни как таковой. Где оставить свой главный след, в чем добиться успеха, - вот вопрос, А достижения должны быть, в противном случае этот ветер принесет больше вреда, чем пользы, да и сам иссякнет.";
        break;
      case "100101":
        zag = "ШИ ХО. Стиснутые зубы";
        wtt =
          "Маленький человек мало думает о своих достижениях, поскольку никто не замечает их. Да и на собственные недостатки он обращает столь же мало внимания. И бывает удивлен, когда окружающие преувеличивают их. Относясь к этому без должного внимания, он позволяет своим недругам интриговать против себя, что безусловно навредит ему. Чтобы избежать подобной ситуации, следует подчеркивать свои достоинства, искать признания, добиться и поддерживать его. Впоследствии это может склонить чашу весов в вашу сторону, если враги постараются досадить вам.";
        break;
      case "101001":
        zag = "БИ. Убранство";
        wtt =
          "Внешний вид - даже если он не экстравагантный - может обеспечить быстрый успех. Собственно, в этом только его и назначение. Но стоит достигнуть желаемого, как следует отказаться от роскоши и других излишеств в пользу простого образа жизни. Подлинный свет не имеет ничего общего с блеском мишуры. Ищите уединения на горных вершинах, Там вы сможете ку­паться в самых теплых и ярких лучах - в лучах солнца.";
        break;
      case "000001":
        zag = "БО. Разрушение";
        wtt =
          "В данный момент обстоятельства против вас. Чем выше вы взобрались, тем больнее падать. Сейчас, когда ваши позиции временно ослабли, подобные перепады неизбежны, Коль скоро это так, пусть быстрее они свершатся, - тем раньше вы сможете действовать с учетом новых обстоятельств. Остерегайтесь скрытых противников; сделайте все, чтобы упрочить свои позиции, а когда придет время, со всей уверенностью и открыто бросьте вызов этим силам.";
        break;
      case "100000":
        zag = "ФУ. Возврат";
        wtt =
          "Как времена года, так и успех наступают в регулярно повторяющиеся периоды. Чтобы воспрянуть вновь, достичь успеха, нужно накопить энергию. Если вы сейчас не в лучшей форме, не берите вину на себя. Просто - такой период. Не старайтесь что-либо изменить, если вы внутренне не готовы к этому. Но и не ищите оправданий для своего бездействия, если ваше время пришло. Согласуйте свой биологический ритм с ритмами природы, и ваша жизнь улучшится.";
        break;
      case "100111":
        zag = "У ВАН. Беспорочность";
        wtt =
          "Не уподобляйтесь глупцам, которые кидаются туда, куда не осмеливаются ступать ангелы. Само небо поможет вам, если вы будете следовать его предначертаниям. Будьте простыми, искренними, добродушными во всем, что бы вы ни делали, и ждите - успех не за горами. Поэтому не стоит расстраиваться из-за временных неудач, смотрите на них, как на испытание вашей непорочности и духовной целостности.";
        break;
      case "111001":
        zag = "ДА ЧУ. Воспитание великим";
        wtt =
          "У вас есть силы, чтобы подняться до небес. Но что еще важнее, - эти силы должны помочь вам сдерживать свои порывы. Подавляя в себе нетерпение и научившись ждать, вы можете накопить еще большую энергию для новых начинаний. Ваша цель - движение вперед. Но оно может навредить, если совершено в неверный момент. Ждите своего момента.";
        break;
      case "100001":
        zag = "И. Питание";
        wtt =
          "Эта гексаграмма похожа на широко открытый рот. Она символизирует период активной подготовки. В верхнем ряду линия сплошная (это период наивысшего проявления силы), далее следуют линии прерывистые (периоды слабости). Раскрытый рот означает, что требуется хорошая «подпитка» (и энергетическая, и физиологическая), чтобы набраться сил в это переходное время и быть готовым к действию, когда настанет нужный момент.";
        break;
      case "011110":
        zag = "ДА ГО. Переразвитие великого";
        wtt =
          "Как мощное дерево может рухнуть и разлететься на части, так и человек - каким бы мужественным и целеустремленным он ни был - может упасть, взвалив на себя непосильную ношу. Надо знать не только свои силы, но и свои слабости.";
        break;
      case "010010":
        zag = "Си Кань. Повторная опасность";
        wtt =
          "Боязнь попасться в ловушку побуждает вас предпринять такие шаги, от которых вам становится хуже. Вы непрестанно мечетесь, а это чревато тем, что вы можете оказаться в глубоком провале. Успокойтесь. Повремените с активными действиями. Дождитесь, когда вам будет светить ласковый свет, чтобы вы могли по освещенному пути дойти к своей цели.";
        break;
      case "101101":
        zag = "ЛИ. Сияние";
        wtt =
          "Пламя творчества - поначалу слабое, и мерцающее, - постепенно разгораясь, озаряет всю вашу интеллектуальную, профессиональную деятельность, придавая ей столь огромный стимул, что ее приходится ограничивать определенными рамками, дабы не захватила вас с головой, В противном случае вы сгорите в горниле творчества или испаритесь, как метеор, от собственного жара.";
        break;
      case "001110":
        zag = "СЯНЬ. Взаимодействие";
        wtt =
          "Не завидуйте горной снежной вершине, своим пиком возносящейся высоко в небо. Лучше быть горными озерами, в которых отражаются небеса и воды которых насыщают растительность на склонах. В свою очередь горные вершины задерживают облака, и дожди наполняют озера. Так умный и добрый человек отдает людям все, что получает, и тем самым приобретает гораздо больше, чем отдает.";
        break;
      case "011100":
        zag = "ХЭН. Постоянство";
        wtt =
          "Добившись определенного положения, используйте его до предела. Ваши упорство и настойчивость в достижении цели дают прекрасные плоды. Они предпочтительнее поспешных, непродуманных шагов. Беспеч­ность хороша до тех пор, пока не настало время для решительных действий. И не беспокойтесь, если вам придется подавлять свои личные потребности. Будьте самими собой, и небо исполнит ваши желания.";
        break;
      case "001111":
        zag = "ДУНЬ. Бегство";
        wtt =
          "Никто не посмеет упрекнуть тигра в том, что он обратился в бегство, завидев, как малые капканы меняют на крупные. Прояви он медлительность, - было бы хуже: вряд ли бы ему удалось добраться до тех мест, где он царствует безраздельно. Вас тоже никто не посмеет упрекнуть, если вы с самого начала распознаете замыслы тех, кто ставит вам ловушки. Только вы не побежите, а с чувством достоинства уверенно уйдете от опасности, к собственному удовлетворению и величайшему разочарованию тех, кто хотел, чтобы вы пали жертвой его козней.";
        break;
      case "111100":
        zag = "ДА ЧЖУАН. Мощь великого";
        wtt =
          "Гром, грозно рокочущий высоко в небе, ничего не значит, если вслед за ним не пойдет дождь. Так и за вашими словами должны обязательно следовать действия, в противном случае слова окажутся пустой, ничего не значащей похвальбой и будут преследовать вас, как удаляющиеся раскаты грома из непролившейся тучи.";
        break;
      case "000101":
        zag = "ЦЗИНЬ. Восход";
        wtt =
          "Как и яркое солнце, сияющее высоко в небе и освещающее все вокруг, успехи и удачи озаряют ваше мировоззрение, делая его жизнерадостным и жизнеут­верждающим. Продолжайте действовать в таком же духе, невзирая на козни противников. Помните только, что коль скоро солнце сопровождает вас повсюду, всем вашим свершениям суждено быть на виду. Поэтому и мысли, и дела, и поступки ваши должны отличаться благородством.";
        break;
      case "101000":
        zag = "МИН И. Поражение света";
        wtt =
          "Когда наступают мрачные времена, будьте осторожны со всем, что он них исходит. Светлые дни придут позже, поэтому глупо понапрасну тратить силы и время. Разумнее притвориться покорными, даже невежественными, скрывая свои проблемы от сил тьмы.";
        break;
      case "101011":
        zag = "ЦЗЯ ЖЭНЬ. Домашние";
        wtt =
          "Настало время, чтобы вы обратили внимание на условия, в которых вы живете и работаете. Если вы ими довольны, если вы счастливы, сделайте так, чтобы вам было здесь еще лучше; не поддавайтесь никаким соблазнам, не покидайте привычной обстановки. Если ими недовольны, несчастны, найдите причину и устраните ее. Особое внимание уделите семье. Добейтесь взаимопонимания. Пусть терпимость и снисхождение придут на смену раздражению.";
        break;
      case "110101":
        zag = "КУЙ. Разлад";
        wtt =
          "Разногласия из-за пустяков могут привести к конфликтам в более важных вопросах. Отсюда следует, что уступки способствуют большему взаимопониманию. Даже если вы правы, но упрямо стоите на своем, одно это делает вас неправыми, поскольку ваше упрямство восстанавливает против вас окружающих до такой степени, что они будут мешать вам идти к вашей цели.";
        break;
      case "001010":
        zag = "ЦЗЯНЬ. Препятствие";
        wtt =
          "Не стоит оплакивать свою судьбу, когда перед вами вырастает препятствие - лучше постарайтесь устранить или обойти его. В чрезвычайной ситуации действуйте решительно. Даже сужающаяся тропинка куда-то ведет. Ищите помощи у других и оказывайте ее сами, когда у вас ее просят. Помните: препятствие, стоящее на пути у другого, через некоторое время может возникнуть перед вами.";
        break;
      case "010100":
        zag = "ЦЗЕ. Разрешение";
        wtt =
          "Та самая гроза, которая заставила вас искать укрытие, освежила воздух и позволила вам с новыми силами двинуться в путь после того, как она утихла. Но если вы захотите быстрее достичь цели, вам придется освободиться от прежних привязанностей или попутчиков, которые могут помешать вам наверстать упущенное.";
        break;
      case "110001":
        zag = "СУНЬ. Убыль";
        wtt =
          "Если с помощью других людей вы достигли богатства, не умно будет целиком присвоить его себе. Вы поступите мудро, щедро и вместе с тем справедливо, разделив его между теми, кто его заслужил, и таким образом в следующий раз эти люди с радостью придут к вам на помощь.";
        break;
      case "100011":
        zag = "И. Приумножение";
        wtt =
          "Когда небеса благосклонны, следует использовать все возможности для достижения цели. В счастливые времена могут пригодиться даже некомпетентные люди. Верхом неблагоразумия было бы думать, что обстоятельства бесконечно будут благоприятствовать вам, или принимать удачу за ваши личные достижения.";
        break;
      case "111110":
        zag = "ГУАЙ. Выход";
        wtt =
          "Когда разверзаются небеса и на землю обрушиваются лавины дождя, в разъяренных волнах гибнут даже сильнейшие, пропадает и их богатство. Следует всегда помнить о такой опасности. Тем более в отношениях с людьми. Ее создают те из них, кто не обладает большим умом, потерял контроль над собой и сметает все традиционные устои. Постарайтесь сделать их так, чтобы потоки зла не поглотили все самое доброе.";
        break;
      case "011111":
        zag = "ГОУ. Перечение";
        wtt =
          "Когда мрачные времена сменяют светлые, умный человек может легко попасть под влияние глупого. Этого не следует допускать, но не с помощью насилия, а с помощью убеждения. Подобно тому, как ветер перемен творит чудеса, вы можете благотворно воздействовать на людей и рассеивать тьму.";
        break;
      case "000110":
        zag = "ЦУЙ. Воссоединение";
        wtt =
          "Тяжело плыть против течения. Беспокойные и настырные первыми отправляются в путь и часто возвращаются обратно. Для того чтобы достичь цели, лучше всего выждать прилива и отдаться на волю волн вместе с другими. Если же окружающие не проявляют интереса к плаванию, возьмите с собой хоть кого-нибудь и постарайтесь оказаться на гребне приливной волны.";
        break;
      case "011000":
        zag = "ШЭН. Подъем";
        wtt =
          "Как зерно, посеянное глубоко в почву, упорно и неустанно пробивается вверх из-под земли, так и ваша воля должна быть твердой и несгибаемой. Идите к цели не спеша, но и не знайте отдыха. Пусть солнечный свет внутри вас стремится к солнцу; вы обессилите, если будете пробиваться в темноте. Тем больше должно быть у вас силы, чем длиннее путь. Не отступайте и не сворачивайте с него.";
        break;
      case "010110":
        zag = "КУНЬ. Истощение";
        wtt =
          "Когда вас преследует неудача, может возникнуть желание убежать как можно дальше и заняться чем-то совершенно новым. Получше присмотритесь к себе. Ведь неудачи оказываются полезными для некоторых людей, в основном для тех, кто умеет преодолевать трудности и из испытаний выходит умудренный опы­том. Не стоит биться головой об стену и винить в этом все ту же стену. Напротив, верьте в себя и помните: вы разорвете путы, которые мешают вам действовать, как только вернутся силы.";
        break;
      case "011010":
        zag = "ЦЗИН. Колодец";
        wtt =
          "Рычаг ходит вверх-вниз, вверх-вниз, вверх-вниз - монотонная утомительная работа, но она неизбежна и необходима, особенно если вы набираете воду из ко­лодца. Однако сначала следует убедиться, что колодец полон, и вода чистая. Когда же вы найдете колодец с родниковой водой, не требуйте, чтобы им никто более не пользовался. Вода - это небесный дар и предназна­чается для всех. Когда же вы качаете воду, не забудьте поглядывать по сторонам, - сосуд, который вы наполняете, могут разбить.";
        break;
      case "101110":
        zag = "ГЭ. Смена";
        wtt =
          "Как темнеют пятна на шкуре растущего леопарда и увеличиваются полосы у взрослеющего тигра, так и в вас произойдут перемены, которые высветят ваш сильный и благородный характер. Подождите. Не торопитесь, Будьте сдержанными. Но не раздумывайте долго, когда наступит время действовать решительно.";
        break;
      case "011101":
        zag = "ДИН. Жертвенник";
        wtt =
          "Начиная разводить огонь под бронзовым котлом, не расстраивайтесь, если тот вдруг опрокинется, - из него вывалится лишь ненужная гарь. Когда же огонь разведен и в котле готовится еда, смотрите, чтобы пламя не опалило ручки котла. Если они раскалятся, вы не сумеете снять его с треножника. Да и проверьте, крепко ли тот стоит на земле, иначе вы останетесь без еды.";
        break;
      case "100100":
        zag = "ЧЖЭНЬ. Молния";
        wtt =
          "Когда огромные грозовые тучи сталкиваются, как два гигантских дракона, люди холодеют от страха при каждой вспышке молнии и каждом раскате грома. Так здравый рассудок покидает нас в моменты, когда он нужнее всего. Лучше скрепить свое сердце и отдаться на волю судьбы и неба, а тем временем решить, куда вы отправитесь, когда кончится буря.";
        break;
      case "001001":
        zag = "ГЭНЬ. Сосредоточенность";
        wtt =
          "Если на вашем пути появятся заманчивые вершины, помните, что любая попытка их покорить задержит вас в движении вперед. В достижении вашей цели возникнет пауза, во время которой, с этой точки зрения, вы будете оставаться неподвижными, как горы. Чрезмерная страстность и увлеченность могут истощить ваши силы, в то время как отдых позволит вам их накопить перед следующим рывком к заветным рубежам.";
        break;
      case "001011":
        zag = "ЦЗЯНЬ. Течение";
        wtt =
          "Большое дерево растет быстрее, чем кустарник, но это не заметно. Так же и дикий лебедь не выдает своих намерений, долго описывая круги по воде, прежде чем выйти на берег. Согласуйте и вы свои поступки с природой, тогда и сумеете достичь желанных целей.";
        break;
      case "110100":
        zag = "ГУЙ МЭЙ. Невеста";
        wtt =
          "Если вам не удалось получить того, что хотели, то наверное, разумнее захотеть того, что вы можете получить. На тех, кто желает слишком многого, часто взваливают такую ответственность, которой они не ожидали. Удовлетворяющиеся малым получают свое. Но не торопитесь отказываться от лучшего. Тот, кто может удовлетвориться немногим, должен набраться терпения и ждать большего.";
        break;
      case "101100":
        zag = "ФЭН. Изобилие";
        wtt =
          "Когда вы счастливы, озаряйте жизнь окружающих подобно тому, как полуденное солнце озаряет землю. Если же небо над вами потемнеет, не беспокойтесь; не пугайтесь, если даже проглянут звезды. Это всего лишь означает, что его луна ненадолго заслонила ваше солнце. Она уйдет так же быстро, как и появилась. А свет солнца засияет для вас еще ярче.";
        break;
      case "001101":
        zag = "ЛЮЙ. Странствие";
        wtt =
          "Представьте себе, что вы путник, быстро идущий по дороге, в то время как ветер гонит за вами пламя по сухой траве. Если вы замешкаетесь и запачкаетесь, вы больше не путник. Вы всегда должны быть опрятно одеты, иначе вам не будут оказывать доброго приема. Кроме того, всегда на вашем пути будут попадаться люди, которые захотят идти с вами. Будьте внимательными и выбирайте достойных.";
        break;
      case "011011":
        zag = "СУНЬ. Проникновение";
        wtt =
          "Нежному ветерку, проникающему повсюду, порой удается то, чего невозможно добиться иным путем. Как склоняется трава под приветливым ветром, так и многие люди примут ваши добрые идеи. Помните об этом. Пусть ваш ветер будет ровным и сильным, если того требуют обстоятельства. Но пусть он не дует слишком сильно, иначе он иссякнет.";
        break;
      case "110110":
        zag = "ДУЙ. Радость";
        wtt =
          "Посмотрите на луну, сияющую высоко в небе, а теперь на озеро у ваших ног, - вы увидите, как одно отражается в другом. Пусть и ваши заботы отражаются в вашем сознании так же бесстрастно и безмятежно. Небесное счастье можно найти и на земле. Земные радости тоже могут принести небесное блаженство.";
        break;
      case "010011":
        zag = "ХУАНЬ. Раздробление";
        wtt =
          "Когда дует свежий ветер, появляются волны и образуют пену, растворяющуюся в теплой воде. Когда дуют холодные ветры, вода становится льдом и ждет - подует весенний теплый ветер, и он вновь превратит лед в воду. В этом заложен великий смысл. Не давайте своим взглядам и идеям растворяться, но и не давайте им застывать и превращаться в лед.";
        break;
      case "110010":
        zag = "ЦЗЕ. Ограничение";
        wtt =
          "Признание и принятие установленных ограничений может принести удачу, подобно тому, как деньги, отложенные в моменты благоденствия, могут оказаться необходимыми в нужде. Когда вы наталкиваетесь на закрытые двери, не стоит тратить силы на то, чтобы разбить их. Когда же двери отворяются, войдите в них и задержитесь, хотя бы для того, чтобы подтвердить свое право на это. Соблюдая правила, вы можете заставить их работать на себя.";
        break;
      case "110011":
        zag = "ЧЖУН ФУ. Внутренняя правда";
        wtt =
          "Когда дельфины, резвясь, выпрыгивают из воды, моряки говорят, что это к буре. Так вода переговаривается с ветром... Цапля, укрывшись в гнезде, предупреждает своих птенцов об опасности; крик ее подхватывает ветер и доносит до ее детей, которые резвятся на мелководье. Так ветер переговаривается с водой... Вы должны научиться распознавать эти предсказания природы, чтобы в нужный момент не упустить их.";
        break;
      case "001100":
        zag = "СЯО ГО. Переразвитие малого";
        wtt =
          "Когда за вершины гор начинают цепляться грозовые облака, птенцы не ищут спасения в тучах, а укрываются в густом кустарнике. Охотник, который вслепую идет по неясному следу, может потеряться и оказаться в затруднительном положении, когда разразится буря и пойдет дождь. Кто бы вы ни были - охотник или дичь, - не рвитесь вперед слишком быстро и не уходите слишком далеко.";
        break;
      case "101010":
        zag = "ЦЗИ ЦЗИ. Уже конец";
        wtt =
          "Огонь, горящий под чайником, нагревает в нем воду. Если же вода закипит, она может залить огонь. Огонь погаснет, вода остынет. Польза превратится во вред. Так же и человек, который только что преодолел ревущий поток и оглянулся, чтобы осознать свою победу падает в ту стремнину, которую только что преодолел. Таким образом, если свое трудное прошлое вы превратили в устойчивое настоящее, то ваша цель - укрепить свои достижения и обеспечить себе счастливое будущее.";
        break;
      case "010101":
        zag = "ВЭЙ ЦЗИ. Еще не конец";
        wtt =
          "Хитрый старый лис осторожно ступает по замерзшей реке, прислушиваясь к малейшему шороху. Молодая лиса стремится к берегу, забывая обо всем, проваливается, и хорошо, если ей повезет и она выберется мокрая от носа до кончика хвоста. Помните об этом, когда вас охватывает искушение двигаться слишком быстро, и не торопитесь начать. Делайте то, что требуется от вас в данный момент. Действуйте с умом и надежно.";
        break;
      default:
        zag = "Ошибка";
        wtt = "Попробуйте еще раз";
    }

    var zag = this.add.text(50, 60, zag, {
      fontSize: "20px",
      fontWeight: "bold",
      fill: "#000",
      stroke: "#000",
      strokeThickness: 2,
      wordWrap: {
        width: 400,
        useAdvancedWrap: true
      }
    });
    var wtt = this.add.text(50, 100, wtt, {
      fontSize: "16px",
      fontWeight: "bold",
      fill: "#000",
      stroke: "#000",
      strokeThickness: 1,
      wordWrap: {
        width: 380,
        useAdvancedWrap: true
      }
    });

    zag.alpha = 0;
    wtt.alpha = 0;
    var tween = this.tweens.add({
      targets: [zag, wtt],
      alpha: 1,
      ease: "Linear",
      duration: 500
    });

    var y = 550;
    for (var i = 0; i < result.length; i++) {
      this.add.image(230, y, result[i] < 1 ? "shortMin" : "longMin");
      y -= 20;
    }

    var newGameBtn = this.add.image(610, 300, "buttonText2");

    newGameBtn.setInteractive({
      useHandCursor: true
    });

    newGameBtn.once(
      "pointerup",
      function() {
        counter = 6;
        result = [];
        this.scene.start("game");
      },
      this
    );
  }
});
// GameOver end

window.onload = function() {
  // config
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#ffffff",
    parent: "phaser-game",
    physics: {
      default: "arcade",
      arcade: {}
    },
    scene: [
      Preloader,
      Text1,
      Text2,
      Text3,
      Text4,
      Game,
      LevelEnd,
      GameOver
    ]
  };

  var game = new Phaser.Game(config);

  if (game.input.touch) {
    game.input.touch.destroy();
  }

  function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if (windowRatio < gameRatio) {
      canvas.style.width = windowWidth + "px";
      canvas.style.height = windowWidth / gameRatio + "px";
    } else {
      canvas.style.width = windowHeight * gameRatio + "px";
      canvas.style.height = windowHeight + "px";
    }
  }
  resize();
  window.addEventListener("resize", resize, false);
};