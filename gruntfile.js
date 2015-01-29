module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      default: {
        files: [
          'app/styles/**/*css'
        ],
        tasks: [
          'styles'
        ]
      }
    },
    myth: {
      default: {
        options: {
          compress: true
        },
        files: {
          'public/dist/bundle.css': 'app/styles/app.css'
        }
      }
    }
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('styles', [
    'myth'
  ])

  grunt.registerTask('default', [
    'myth',
    'watch'
  ])
}
