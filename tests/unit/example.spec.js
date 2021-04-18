import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Table from '@/components/Table.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });

  // it('測試 todo 新增功能', () => {
  //   const wrapper = mount(HelloWorld);
  //   wrapper.setData({
  //     newtodo: 'test'
  //   });
  //   wrapper.setProps({
  //     newtodo: 'test'
  //   });
  //   wrapper.find('.new-todo').trigger('keyup.enter');
  //   expect(wrapper.vm.todos[2].text()).to.be.equal('test');
  // });

  it('測試 table 顯示', () => {
    const data = [
      {
        Ranking: 1,
        EquipmentModel: 'CT900_1',
        UsageHours: '52.5',
        Distance: '110.22'
      },
      {
        Ranking: 2,
        EquipmentModel: 'CT9000ENT_1',
        UsageHours: '35.8',
        Distance: '119.21'
      }
    ];
    const wrapper = shallowMount(Table, {
      propsData: { data }
    });
    // const equipmentLabel = wrapper.findAll('.equipmentLabel').at(0);
    // expect(equipmentLabel.exists()).to.be.true;
    // expect(equipmentLabel.text()).to.be.equal('110.22');
    expect(wrapper.vm.$el.querySelectorAll('.equipmentLabel')[0].textContent).to.be.equal('110.22');
  });

  // it('測試 todo 修改功能', () => {
  //   const wrapper = mount(HelloWorld);
  //   const li = wrapper.find('li');
  //   const label = li.find('label');
  //   label.trigger('dblclick');
  //   expect(li.classes()).to.be.include('editing');
  // });
});
