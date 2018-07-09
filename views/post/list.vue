<template>
  <div>
    <Checkbox v-for="(item, index) in checkBoxs" :key="item.key" v-model="item.show" @on-change="updateTableColumns">{{item.title}}</Checkbox>
    <Table :data="tableData" :columns="tableColumns" border></Table>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData: [{}],
                tableColumns: [],
                checkBoxs: {},
                oldTableColumns: []
            }
        },
        methods: {
            getTableData () {
                let data = [];
                function getNum() {
                    return Math.floor(Math.random () * 10000 + 1);
                }
                for (let i = 0; i < 10; i++) {
                    data.push({
                        title: 'Name ' + (i+1),
                        author: 0,
                        visit: getNum(),
                        collect: getNum(),
                        top: getNum(),
                        update: getNum(),
                        deleted: getNum()
                    })
                }
                return data;
            },
            getTableColumns () {
                const tableColumnList = [
                    {
                        title: '标题',
                        key: 'title',
                        fixed: 'left',
                        width: 200,
                        sortable: true,
                        show: true
                    },
                    {
                        title: '作者',
                        key: 'author',
                        width: 150,
                        sortable: true,
                        show: true
                    },
                    {
                        title: '访问量',
                        key: 'visit',
                        width: 150,
                        sortable: true,
                        show: true
                    },
                    {
                        title: '收藏量',
                        key: 'collect',
                        width: 150,
                        sortable: true,
                        show: true
                    },
                    {
                        title: '置顶',
                        key: 'top',
                        width: 150,
                        sortable: true,
                        show: true
                    },
                    {
                        title: '更新时间',
                        key: 'update',
                        width: 150,
                        sortable: true,
                        show: true
                    },
                    {
                        title: '删除是否',
                        key: 'deleted',
                        width: 150,
                        sortable: true,
                        show: true
                    }
                ];
                let checkBoxs = {};
                this.oldTableColumns = tableColumnList;
                const tableColumns = tableColumnList.filter(item => {
                  checkBoxs[item.key] = {
                    key: item.key,
                    show: item.show,
                    title: item.title
                  };
                  return item.show;
                });
                this.checkBoxs = checkBoxs;
                return tableColumns;
            },
            updateTableColumns () {
              let checkBoxs = this.checkBoxs;
              this.tableColumns = this.oldTableColumns.filter(item => {
                return checkBoxs[item.key]["show"];
              });
            }
        },
        mounted () {
          this.tableColumns = this.getTableColumns();
          this.tableData = this.getTableData();
        }
    }
</script>
