
var reminder = {
    title:"",
    date: new Date()
}

//UI
$ui.render({
    props: {
        title: "新增提醒事项"
    },
    views: [{
        type: "input",
        props: {
            id: "reminder",
            placeholder: "请输入需要提醒的文字",
        },
        layout: function(make, view) {
            make.top.left.inset(10)
            make.right.inset(60)
            make.height.equalTo(32)
        },
        events: {
            changed: function(sender) {
                reminder.title = sender.text
            }
        }
    },
    {
        type: "button",
        props: {
          icon: $icon("136", $color("tint"), $size(120, 120)),
          bgcolor: $color("clear")
        },
        layout: function(make, view) {
          make.top.equalTo(view.super).offset(13)
          make.right.equalTo(view.super).offset(-18)
          make.size.equalTo($size(25, 25))
        },
        events: {
            tapped: function(sender) {
                save()
            }
          }
      },
    {
        type: "date-picker",
        props:{
            id: "datePicker",
        },
        layout: function(make) {
          make.left.right.equalTo(0)
          make.top.equalTo(36)
          make.height.equalTo(180)
        },
        events:{
            changed: function(sender) {
                 reminder.date = sender.date
            }
        }
      }
]
})

//Save
function save(){
    $reminder.create({
        title: reminder.title,
        alarmDate: reminder.date,
        handler: function(resp) {
            $ui.toast(resp.status?"保存成功":"保存失败")
        }
    })
}